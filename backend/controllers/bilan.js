const CarbonFootprint = require("../Models/Bilan");
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
const { FixedPosteAttributs } = require("../utils/data");
const { isValidObjectId } = require('mongoose');

const createBilan = async (req, res) => {
  const { clientId } = req.body;
  try {
    let postEmissions = [];
    let i = 0;
    // const FE = await Combustibles.findOne({
    FixedPosteAttributs.map((att) => {
      const newAtt = {
        ...att,
        emissions: 0,
        categoryElements: [],
      };
      postEmissions[i] = newAtt;
      i++;
    });
    console.log(postEmissions);
    const newCarbonFootprint = new CarbonFootprint({
      clientId,
      emissionPosts: postEmissions,
    });
    await newCarbonFootprint.save();
    return res.status(200).json(newCarbonFootprint);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

// update and calculate bilan
const updateAndCalculateBilan = async (req, res) => {
  const { clientId ,year, selectedCategoryElements } = req.body;
  if(!isValidObjectId(clientId)){
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const carbonFootprint = await CarbonFootprint.findOne({ clientId ,year });
    if (!carbonFootprint) {
      return res.status(404).json({ msg: "Bilan not found" });
    }
    for (let i = 0; i < selectedCategoryElements.length; i++) {
      const categoryElements = selectedCategoryElements[i];
      if (categoryElements.length > 0) {
          const emissions = await calculateEmissionsPost(carbonFootprint.emissionPosts[i].category, categoryElements);
          carbonFootprint.emissionPosts[i].emissions = emissions;
          carbonFootprint.emissionPosts[i].categoryElements = categoryElements;
      }
  }
    
    const totalEmissions = await calculateTotalBilan(carbonFootprint.emissionPosts);
    carbonFootprint.totalEmissions = totalEmissions;
    await carbonFootprint.save();
    return res.status(200).json(carbonFootprint);

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

//calculate the emissions for a single post Emission
const calculateEmissionsPost = async (category , categoryElements) => {
 
  let emissions = 0;
  let i = 0;
  const Model = categoriesConnection.model(category);
  for (const element of categoryElements) {
      const categoryElement = await Model.findById(element.categoryElement);
      emissions += categoryElement.totalPostValue * element.quantity;
      i++;
  }
  
  return emissions;
}

// calculate total Bilan emissions
const calculateTotalBilan = async (emissionPosts) => {
  let totalEmissions = 0;
  for(const post of emissionPosts) {
    totalEmissions += post.emissions;
  }
  return totalEmissions;
};

module.exports = { createBilan , updateAndCalculateBilan};
