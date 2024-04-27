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

// related to the update of the bilan

// update and calculate bilan
const updateAndCalculateBilan = async (req, res) => {
  const { clientId, year, selectedCategoryElements } = req.body;
  
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  
  try {
    let carbonFootprint = await CarbonFootprint.findOne({ clientId, year });
    
    if (!carbonFootprint) {
      return res.status(404).json({ msg: "Bilan not found" });
    }
    
    for (let i = 0; i < selectedCategoryElements.length; i++) {
      const categoryElements = selectedCategoryElements[i];
      
      if (categoryElements.length > 0) {
        const emissions = await calculateEmissionsPost(carbonFootprint.emissionPosts[i].category, categoryElements);
        
        // Update emissionPosts array with categoryElements and emissions
        carbonFootprint.emissionPosts[i].emissions = emissions;
        carbonFootprint.emissionPosts[i].categoryElements = categoryElements;
      }
    }
    
    // Calculate total emissions
    const totalEmissions = await calculateTotalBilan(carbonFootprint.emissionPosts);
    carbonFootprint.totalEmissions = totalEmissions;
    
    // Save the updated CarbonFootprint document
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
  
  
  const  Model = categoriesConnection.model(category.trim());
  
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

///////////////////////////

const getBilan = async (req, res) => {
  const { clientId, year } = req.params; // Access clientId and year from request parameters
  
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  
  try {
    const carbonFootprint = await CarbonFootprint.findOne({ clientId, year });
    
    if (!carbonFootprint) {
      return res.status(404).json({ msg: "Bilan not found" });
    }
    
    return res.status(200).json(carbonFootprint);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};


// GET all bilans

const getAllBilans = async (req, res) => {
  const { clientId } = req.params;
  
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  
  try {
    const carbonFootprints = await CarbonFootprint.find({ clientId });
    
    if (!carbonFootprints) {
      return res.status(404).json({ msg: "Bilans not found" });
    }
    
    return res.status(200).json(carbonFootprints);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

// DELETE a single bilan

const deleteBilan = async (req, res) => {
  const { clientId, year } = req.params;
  
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  
  try {
    const carbonFootprint = await CarbonFootprint.findOneAndDelete({ clientId, year });
    
    if (!carbonFootprint) {
      return res.status(404).json({ msg: "Bilan not found" });
    }
    
    return res.status(200).json({ msg: "Bilan deleted" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

module.exports = { createBilan ,
   updateAndCalculateBilan,
    getBilan,
    getAllBilans,
    deleteBilan
  };
