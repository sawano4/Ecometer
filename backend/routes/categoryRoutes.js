const express = require("express");
const { getCategoryElements } = require("../controllers/category");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/nextCategories", getCategoryElements);


module.exports = router;
