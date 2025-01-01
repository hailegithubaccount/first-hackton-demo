import express from 'express';
import authController from '../controller/authController.js';
import auth from '../middleware/auth.js';

const router=express.Router()

router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/',auth.protect,auth.isUser,authController.getAllUser)



export default router;