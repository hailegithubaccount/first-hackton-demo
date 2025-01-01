// middleware/auth.js
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const protect = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        } else {
            return res.status(400).json({
                status: 'fail',
                message: 'No authentication token provided'
            });
        }

        const verified = await jwt.verify(token, process.env.JWTSECRATE);
        console.log(verified);

        res.locals.id = verified.id.id;
        res.locals.role = verified.id.role;

        next();
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
};

const isAdmin = async (req, res, next) => {
    const id = res.locals.id;
    const user = await userModel.findById(id);

    if (!user) {
        return res.status(400).json({
            status: 'failed',
            message: 'User no longer exists'
        });
    }

    if (user && user.role !== 'admin') {
        return res.status(401).json({
            status: 'failed',
            message: 'You do not have permission to do that'
        });
    }

    res.locals.admin = user;
    next();
};

const isUser = async (req, res, next) => {
    const id = res.locals.id;
    const user = await userModel.findById(id);

    if (!user) {
        return res.status(400).json({
            status: 'failed',
            message: 'User no longer exists'
        });
    }

    if (user && user.role !== 'user') {
        return res.status(401).json({
            status: 'failed',
            message: 'You do not have permission to do that'
        });
    }

    res.locals.user = user;
    next();
};

// Export the functions as default
export default { protect, isAdmin, isUser };
