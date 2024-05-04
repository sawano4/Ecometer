const express = require("express");
const {
  registerClient,
  loginClient,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getClientProfile,
  updateClientProfile,
  deleteClient,
  updateClientPassword,
} = require("../controllers/client");

const router = express.Router();

// POST Routes

router.post("/register", registerClient);
router.post("/login", loginClient);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// GET Routes

router.get("/:clientId", getClientProfile);

// UPDATE Routes

router.put("/update-profile/", updateClientProfile);
router.put("/update-password/", updateClientPassword);

// DELETE Routes

router.delete("/delete/:clientId", deleteClient);

module.exports = router;
