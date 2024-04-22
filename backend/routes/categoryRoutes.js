const express = require('express');
const { getNextLevelCategories } = require('../controllers/categoryControllers');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/nextCategories', async (req, res) => {

// Define API endpoint to handle user-selected categories
    try {
        const userSelectedCategories = req.body.userSelectedCategories;
        // If userSelectedCategories is empty, return the default categories
        if (!userSelectedCategories || userSelectedCategories.length === 0 || userSelectedCategories[0] === '') {
            return res.json({ msg : "enter Categories please" });
        }

        // Query MongoDB to get the next level categories
        const { nextLevelCategories, matchingDocuments} = await getNextLevelCategories(userSelectedCategories);
        
        res.json({ nextCategories: nextLevelCategories , matchingDocuments: matchingDocuments });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
