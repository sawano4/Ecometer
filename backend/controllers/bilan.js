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
const { unsubscribe } = require("../routes/categoryRoutes");
const { FixedPosteAttributs } = require("../utils/data");
const { isValidObjectId } = require("mongoose");

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
  const { clientId, year, selectedCategoryElements } = req.body;

  console.log("req.body = ", req.body);
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const carbonFootprint = await CarbonFootprint.findOne({ clientId, year });
    if (!carbonFootprint) {
      return res.status(404).json({ msg: "Bilan not found" });
    }
    for (let i = 0; i < selectedCategoryElements.length; i++) {
      const categoryElements = selectedCategoryElements[i];
      if (categoryElements.length > 0) {
        const { emissions, weightedAverageUncertainty, CO2, CH4, N2O } =
          await calculateEmissionsPost(
            carbonFootprint.emissionPosts[i].category,
            categoryElements
          );
        carbonFootprint.emissionPosts[i].emissions = emissions;
        carbonFootprint.emissionPosts[i].uncertainty =
          weightedAverageUncertainty;
        carbonFootprint.emissionPosts[i].categoryElements = categoryElements;
        carbonFootprint.emissionPosts[i].CO2 = CO2;
        carbonFootprint.emissionPosts[i].CH4 = CH4;
        carbonFootprint.emissionPosts[i].N2O = N2O;
      }
    }

    const { totalEmissions, totalWeightedAverageUncertainty } =
      await calculateTotalBilan(carbonFootprint.emissionPosts);
    carbonFootprint.totalEmissions = totalEmissions;
    carbonFootprint.totalUncertainty = totalWeightedAverageUncertainty;
    await carbonFootprint.save();
    return res.status(200).json(carbonFootprint);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

//calculate the emissions for a single post Emission
const calculateEmissionsPost = async (category, categoryElements) => {
  let emissions = 0;
  let totalValueTimesUncertainty = 0;
  let totalValue = 0;
  let CO2 = 0;
  let CH4 = 0;
  let N2O = 0;
  let i = 0;
  const Model = categoriesConnection.model(category);
  for (const element of categoryElements) {
    const categoryElement = await Model.findById(element.categoryElement);
    emissions += categoryElement.totalPostValue * element.quantity;
    const uncertaintyPercentage =
      categoryElement.uncertainty !== null
        ? parseFloat(categoryElement.uncertainty) / 100
        : 0;
    const uncertainty =
      categoryElement.totalPostValue * uncertaintyPercentage * element.quantity;
    totalValueTimesUncertainty += uncertainty;
    totalValue += categoryElement.totalPostValue * element.quantity;
    if (categoryElement.structure === "élément décomposé par gaz") {
      //console.log("element décomposé par gaz");
      CO2 += categoryElement.co2 * element.quantity;
      CH4 += categoryElement.ch4 * element.quantity;
      N2O += categoryElement.n2o * element.quantity;
      //if (i == 1) {CO2 = "NC"}
    }
    i++;
  }
  if (totalValueTimesUncertainty !== 0) {
    const weightedAverageUncertainty = totalValueTimesUncertainty / totalValue;
    return { emissions, weightedAverageUncertainty, CO2, CH4, N2O };
  }
  //console.log("Co2", CO2);
  return { emissions, weightedAverageUncertainty: 0, CO2, CH4, N2O };
};

const calculateWeightedAverageUncertainty = (elements) => {
  let totalValueTimesUncertainty = 0;
  let totalValue = 0;

  for (const element of elements) {
    const value = element.value;
    const uncertainty = element.uncertainty * value;
    totalValueTimesUncertainty += uncertainty;
    totalValue += value;
  }

  const weightedAverageUncertainty = totalValueTimesUncertainty / totalValue;
  return weightedAverageUncertainty;
};

// calculate total Bilan emissions
const calculateTotalBilan = async (emissionPosts) => {
  let totalEmissionsAbs = 0;
  let totalEmissions = 0;
  let totalValueTimesUncertainty = 0;
  for (const post of emissionPosts) {
    totalEmissions += post.emissions;
    totalEmissionsAbs += Math.abs(post.emissions);
    const uncertainty = Math.abs(post.emissions) * post.uncertainty;
    totalValueTimesUncertainty += uncertainty;
  }

  if (totalValueTimesUncertainty !== 0) {
    const totalWeightedAverageUncertainty =
      totalValueTimesUncertainty / totalEmissionsAbs;
    return { totalEmissions, totalWeightedAverageUncertainty };
  }
  return { totalEmissions, totalWeightedAverageUncertainty: 0 };
};

// get a single bilan

const getBilan = async (req, res) => {
  const { clientId, year } = req.params;
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

// get all bilans

const getAllBilans = async (req, res) => {
  try {
    const { clientId } = req.params;
    const carbonFootprints = await CarbonFootprint.find(clientId);
    return res.status(200).json(carbonFootprints);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

// delete a bilan

const deleteBilan = async (req, res) => {
  const { clientId, year } = req.params;
  if (!isValidObjectId(clientId)) {
    return res.status(400).json({ msg: "Invalid client ID" });
  }
  try {
    const carbonFootprint = await CarbonFootprint.findOneAndDelete({
      clientId,
      year,
    });
    if (!carbonFootprint) {
      return res.status(404).json({ msg: "Bilan not found" });
    }
    return res.status(200).json({ msg: "Bilan deleted" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal error" });
  }
};

module.exports = {
  createBilan,
  updateAndCalculateBilan,
  getBilan,
  getAllBilans,
  deleteBilan,
};
