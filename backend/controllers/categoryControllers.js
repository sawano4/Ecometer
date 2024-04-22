const express = require('express');
const mongoose = require('mongoose');
const {  AchatsDeBiens,
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
    categoriesConnection } = require('../Models/Category');

      // maincategories should be as the first category for each activity by default
    const mainCategories = ['Combustibles', 'Achats de biens', 'Achats de services', 'Electricité', 'Process et émissions fugitives', 'Réseaux de chaleur / froid', 'Statistiques territoriales', 'Traitement des déchets', 'Transport de marchandises', 'transport de personne routier, taxi', 'UTCF'];


// Function to get the next level categories using Mongoose
async function getNextLevelCategories(userSelectedCategories) {
    let nextLevelCategories = new Set();
    const mainCategory = userSelectedCategories[0];
    let Model;
    switch (mainCategory) {
        case 'Combustibles':
            Model = categoriesConnection.model('Combustibles');
            break;
        case 'Achats de biens':
            Model = categoriesConnection.model('AchatsDeBiens');
            break;
        case 'Achats de services':
            Model = categoriesConnection.model('AchatsDeServices');
            break;
        case 'Electricité':
            Model = categoriesConnection.model('Electricite');
            break;
        case 'Process et émissions fugitives':
            Model = categoriesConnection.model('ProcessEtEmissionFugitives');
            break;
        case 'Réseaux de chaleur / froid':
            Model = categoriesConnection.model('ReseauxDeChaleurEtFroid');
            break;
        case 'Statistiques territoriales':
            Model = categoriesConnection.model('StatistiquesTerritoriales');
            break;
        case 'Traitement des déchets':
            Model = categoriesConnection.model('TraitementDesDechets');
            break;
        case 'Transport de marchandises':
            Model = categoriesConnection.model('TransportDeMarchandises');
            break;
        case 'transport de personne routier, taxi':
            Model = categoriesConnection.model('TransportDePersonnes');
            break;
        case 'UTCF':
            Model = categoriesConnection.model('UTCF');
            break;
    }
    // Query MongoDB using Mongoose to find next level categories
    const matchingDocuments = await Model.find({ categories: { $all: userSelectedCategories } });
    
    // Extract next level categories from matching documents
    matchingDocuments.forEach(doc => {
        const nextCategoryIndex = userSelectedCategories.length;
        if (doc.categories.length > nextCategoryIndex) {
            nextLevelCategories.add(doc.categories[nextCategoryIndex]);
        }
    });
    nextLevelCategories = Array.from(nextLevelCategories);

    return { nextLevelCategories, matchingDocuments};
}



module.exports = { getNextLevelCategories }