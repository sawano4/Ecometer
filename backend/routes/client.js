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
const { verifyClientToken } = require("../middleware/auth");

const router = express.Router();

// POST Routes

router.post("/register", registerClient);
router.post("/login", loginClient);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// GET Routes

router.get("/profile",verifyClientToken, getClientProfile);
router.get("/all-clients",/*verifyClientToken,*/ getAllClients);

// UPDATE Routes

router.put("/update-profile/",verifyClientToken, updateClientProfile);
router.put("/update-password/",verifyClientToken, updateClientPassword);

// DELETE Routes

router.delete("/delete/:clientId",verifyClientToken, deleteClient);

module.exports = router;
