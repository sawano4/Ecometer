const express = require("express");
const {
  getEmissionFactors,
  addEmissionFactor,
  deleteEmissionFactor,
  modifyEmissionFactor,
  getClients
} = require("../controllers/admin");
const router = express.Router();

router.get("/getfactors", getEmissionFactors);
router.get("/clients",getClients)
router.post("/addfactor", addEmissionFactor);
router.delete("/deletefactor", deleteEmissionFactor);
router.put("/modifyfactor", modifyEmissionFactor);


module.exports = router;
