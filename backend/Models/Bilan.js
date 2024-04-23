const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
// Get the current date
const currentDate = new Date();
// Get the current year
const currentYear = currentDate.getFullYear();

const usedElements = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 0,
  },
  categoryElement: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "category",
  },
});
// Define schema for emission posts
const emissionPostSchema = new mongoose.Schema({
  index: Number,
  category: String,
  postName: String,
  scope: String,
  emissions: { type: Number, default: 0 }, // Default value is 0 for emissions
  categoryElements: {
    type: [usedElements],
    default: [], // default value is an empty array , the model depends on the category
  },
});

// Define schema for carbon footprint document
const carbonFootprintSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  emissionPosts: [emissionPostSchema],
  year: { type: Number, default: currentYear },
  totalemissions: { type: Number, default: 0 }, // Default value is 0 for total emissions
  createdAt: { type: Date, default: Date.now }, // Default value is the current date and time
});

const bilansConnection = mongoose.createConnection(process.env.BILANS_URL);
// Add error handling
bilansConnection.on("error", console.error.bind(console, "connection error:"));
bilansConnection.once("open", function () {
  console.log("Connected to Bilans database");
});

// Create model for carbon footprint
const CarbonFootprint = bilansConnection.model(
  "CarbonFootprint",
  carbonFootprintSchema,
  "carbonFootprints"
);

module.exports = CarbonFootprint;
