const express = require('express');
const mongoose = require('mongoose');
const { CarbonFootprint } = require('../Models/Bilan');

const postEmission = async (req, res) => {

   const { clientId, emissionPosts } = req.body;
    try {    
        console.log(clientId, emissionPosts);
        const carbonFootprint = await CarbonFootprint.create({ clientId, emissionPosts });
        return res.status(200).json({ msg: 'Emission posted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { postEmission };