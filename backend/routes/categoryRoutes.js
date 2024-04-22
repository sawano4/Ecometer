const express = require('express');
const { getCategoryElements } = require('../controllers/categoryControllers');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/nextCategories', getCategoryElements );



module.exports = router;
