const express = require("express");
const { getCategoryElements } = require("../controllers/category");
const { createBilan } = require("../controllers/bilan");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/nextCategories", getCategoryElements);
router.post("/postemission", createBilan);

module.exports = router;
