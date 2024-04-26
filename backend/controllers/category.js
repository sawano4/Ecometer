const express = require("express");
const mongoose = require("mongoose");
const {
  AchatsDeBiens,
  AchatsDeServices,
  Combustibles,
  ProcessEtEmissionFugitives,
  Electricite,
  ReseauxDeChaleurEtFroid,
  StatistiquesTerritoriales,
  TraitementDesDechets,
  TransportDeMarchandises,
  TransportDePersonnes,
  UTCF,
  categoriesConnection,
} = require("../Models/Category");

// maincategories should be as the first category for each activity by default
const mainCategories = [
  "Combustibles",
  "Achats de biens",
  "Achats de services",
  "Electricité",
  "Process et émissions fugitives",
  "Réseaux de chaleur / froid",
  "Statistiques territoriales",
  "Traitement des déchets",
  "Transport de marchandises",
  "transport de personne routier, taxi",
  "UTCF",
];

// Function to get the next level categories and matching documents

const getCategoryElements = async (req, res) => {
  // Define API endpoint to handle user-selected categories
  try {
    const userSelectedCategories = req.body.userSelectedCategories;
    // If userSelectedCategories is empty, return the default categories
    if (
      !userSelectedCategories ||
      userSelectedCategories.length === 0 ||
      userSelectedCategories[0] === ""
    ) {
      return res.status(400).json({ msg: "enter Categories please" });
    }

    // Query MongoDB to get the next level categories
    const { nextLevelCategories, matchingDocuments, existingCategory } =
      await getNextLevelCategories(userSelectedCategories);

    // if selectedcategories are not valid return 404 invalid categories
    if (existingCategory === false) {
      return res.status(404).json({ msg: " Invalid Categories " });
    }
    res.json({
      nextCategories: nextLevelCategories,
      matchingDocuments: matchingDocuments,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to get the next level categories
async function getNextLevelCategories(userSelectedCategories) {
  let nextLevelCategories = new Set();
  let existingCategory = true;
  const mainCategory = userSelectedCategories[0];
  let Model;
  switch (mainCategory) {
    case "Combustibles":
      Model = categoriesConnection.model("Combustibles");
      break;
    case "Achats de biens":
      Model = categoriesConnection.model("AchatsDeBiens");
      break;
    case "Achats de services":
      Model = categoriesConnection.model("AchatsDeServices");
      break;
    case "Electricité":
      Model = categoriesConnection.model("Electricite");
      break;
    case "Process et émissions fugitives":
      Model = categoriesConnection.model("ProcessEtEmissionFugitives");
      break;
    case "Réseaux de chaleur / froid":
      Model = categoriesConnection.model("ReseauxDeChaleurEtFroid");
      break;
    case "Statistiques territoriales":
      Model = categoriesConnection.model("StatistiquesTerritoriales");
      break;
    case "Traitement des déchets":
      Model = categoriesConnection.model("TraitementDesDechets");
      break;
    case "Transport de marchandises":
      Model = categoriesConnection.model("TransportDeMarchandises");
      break;
    case "transport de personne routier, taxi":
      Model = categoriesConnection.model("TransportDePersonnes");
      break;
    case "UTCF":
      Model = categoriesConnection.model("UTCF");
      break;
    default:
      existingCategory = false;
      return {
        nextLevelCategories: [],
        matchingDocuments: [],
        existingCategory,
      };
  }
  // Query MongoDB using Mongoose to find next level categories
  const matchingDocuments = await Model.find({
    categories: { $all: userSelectedCategories },
  });

  // Extract next level categories from matching documents
  matchingDocuments.forEach((doc) => {
    const nextCategoryIndex = userSelectedCategories.length;
    if (doc.categories.length > nextCategoryIndex) {
      nextLevelCategories.add(doc.categories[nextCategoryIndex]);
    }
  });
  nextLevelCategories = Array.from(nextLevelCategories);

  return { nextLevelCategories, matchingDocuments, existingCategory };
}



module.exports = { getCategoryElements };
