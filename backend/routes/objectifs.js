const express = require("express");
const {
  createObjectif,
  updateObjectif,
  deleteObjectif,
  getAllObjectifs,
} = require("../controllers/objectifs");
const router = express.Router();

router.post("/create", createObjectif);
router.put("/update", updateObjectif);
router.delete("/delete", deleteObjectif);
router.get("/get", getAllObjectifs);

module.exports = router;
