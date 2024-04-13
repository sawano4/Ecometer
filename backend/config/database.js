const express = require('express');
const dotenv = require('dotenv');
dotenv.config();



//database config


module.exports = {
    development: {
        connectionString: 'mongodb+srv://moussoubillel:billel2004@sawanus.xw7ivfh.mongodb.net/?retryWrites=true&w=majority&appName=Sawanus',
    },
    production: {
        connectionString: process.env.DB_URL,
    },
};
