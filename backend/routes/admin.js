const express = require("express");
const {
  getEmissionFactors,
  addEmissionFactor,
  deleteEmissionFactor,
  modifyEmissionFactor,
} = require("../controllers/admin");
const router = express.Router();

router.get("/getfactors", getEmissionFactors);
router.post("/addfactor", addEmissionFactor);
router.delete("/deletefactor", deleteEmissionFactor);
router.put("/modifyfactor", modifyEmissionFactor);

module.exports = router;
