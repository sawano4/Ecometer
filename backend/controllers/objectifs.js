const express = require("express");
const mongoose = require("mongoose");
const Objectif = require("../Models/Objectif");
const { isValidObjectId } = require("mongoose");

// Function to make a new objectif
const createObjectif = async (req, res) => {
  const { clientId, year, objectif, objectifType, objectifDescription } =
    req.body;
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const newObjectif = new Objectif({
      clientId,
      year,
      objectif,
      objectifType,
      objectifDescription,
    });
    await newObjectif.save();
    return res.status(200).json(newObjectif);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

// Function to update an objectif
const updateObjectif = async (req, res) => {
  const { clientId, objectifId, objectif, objectifType, objectifDescription } =
    req.body;
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const updatedObjectif = await Objectif.findByIdAndUpdate(objectifId, {
      objectif,
      objectifType,
      objectifDescription,
    });
    if (!updatedObjectif) {
      return res.status(404).json({ msg: "Objectif not found" });
    }
    return res.status(200).json(updatedObjectif);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

// Function to delete an objectif
const deleteObjectif = async (req, res) => {
  const { clientId, objectifId } = req.body;
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const deletedObjectif = await Objectif.findByIdAndDelete(objectifId);
    if (!deletedObjectif) {
      return res.status(404).json({ msg: "Objectif not found" });
    }
    return res.status(200).json({ msg: "Objectif deleted" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

// Function to get all objectifs
const getAllObjectifs = async (req, res) => {
  const clientId  = req.clientId;
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const objectifs = await Objectif.find({ clientId });
    return res.status(200).json(objectifs);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

module.exports = {
  createObjectif,
  updateObjectif,
  deleteObjectif,
  getAllObjectifs,
};
