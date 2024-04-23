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

module.exports = { createBilan };
