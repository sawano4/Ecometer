const express = require('express');
const dotenv = require('dotenv');
dotenv.config();



//database config


module.exports = {
    development: {
        connectionString: process.env.DB_URL,
    },
    production: {
        connectionString: process.env.DB_URL,
    },
};
