const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


// server.js

module.exports = {
    port: process.env.PORT , // Server port
    jwtSecret: process.env.JWT_SECRET , // JWT secret key
};
