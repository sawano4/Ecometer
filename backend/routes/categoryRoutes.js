const express = require('express');
const { getCategoryElements } = require('../controllers/categoryControllers');
const { postEmission } = require('../controllers/binlanControllers');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/nextCategories', getCategoryElements );
router.post('/postemission', postEmission);


module.exports = router;
