const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


// server.js

module.exports = {
    port: process.env.PORT || 3000, // Default to port 3000 if not specified in environment variables
    jwtSecret: process.env.JWT_SECRET || 'dea6cadcb046b3852d19000017a4abab107965bd0df170903c6f459c1b592737', // JWT secret key
};
