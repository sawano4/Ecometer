const express = require("express");
const {
  registerClient,
  loginClient,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require("../controllers/client");

const router = express.Router();

router.post("/register", registerClient);
router.post("/login", loginClient);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password",resetPassword);

module.exports = router;
