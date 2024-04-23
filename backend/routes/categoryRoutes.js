const express = require("express");
const { getCategoryElements } = require("../controllers/categoryControllers");
const { createBilan } = require("../controllers/bilanControllers");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/nextCategories", getCategoryElements);
router.post("/postemission", createBilan);

module.exports = router;
