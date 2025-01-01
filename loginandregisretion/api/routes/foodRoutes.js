// routes/insertfood.js
import express from 'express';
import Food from '../model/food'; // Check if the path is correct
 // Use import for ES Modules

const router = express.Router();

// Route to add a new food item
router.post('/foods', async (req, res) => {
    try {
        const { name, imageUrl, price, inStock } = req.body;
        const newFood = new Food({ name, imageUrl, price, inStock });
        await newFood.save();
        res.status(201).json(newFood);
    } catch (error) {
        res.status(500).json({ message: 'Error creating food item', error });
    }
});

export default router;
