const express = require('express');
const { registerClient, loginClient,verifyEmail } = require('../controllers/clientControllers');

const router = express.Router();


router.post('/register', registerClient );
router.post('/login', loginClient);
router.post('/verify-email', verifyEmail)







module.exports = router;
