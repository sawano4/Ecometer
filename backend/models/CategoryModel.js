const mongoose = require('mongoose');

const Schema = mongoose.Sch;

//define CategorySchema

const CategoryElementSchema = new Schema({
   TypeLigne: {
         type: String,
         required: [true, 'TypeLigne field is required']
    },
    IdentifiantElement: {
            type:Number,
            required: [true, 'IdentifiantElement field is required']
     },
    Structure: {
        type: String,
        required: [true, 'Structure field is required']
    },
    NomBaseFrancais: {
        type: String,
        required: [true, 'NomBaseFrancais field is required']
    },
    CodeCategorie: {
        type: String,
        required: [true, 'CodeCategorie field is required']
    },
    TagsFrancais: {
        type: String,
        required: [true, 'TagsFrancais field is required']
    },
    UniteFrancais: {
        type: String,
        required: [true, 'UniteFrancais field is required']
    },
    Incertitude: {
        type: String,
        required: [true, 'Incertitude field is required']
    },
    TypePoste: {
        type: String,
        required: [true, 'TypePoste field is required'],
        default: null
    },
    TotalPosteNonDecompose: {
        type: Number,
        required: [true, 'TotalPosteNonDecompose field is required']
    },
    CO2f: {
        type: Number,
        required: [true, 'CO2f field is required'],
        default: null
    },
    CH4f: {
        type: Number,
        required: [true, 'CH4f field is required'],
        default: null
    },
    CH4b: {
        type: Number,
        required: [true, 'CH4b field is required'],
        default: null
    },
    N2O: {
        type: Number,
        required: [true, 'N2O field is required'],
        default: null
    }
});


//create models
const AchatsDeBiensFactors = mongoose.model('AchatsDeBiensFactors',CategoryElementSchema, 'Achats-de-biens-Factors');

const AchatsDeService = mongoose.model('AchatsDeService',CategoryElementSchema, 'Achats-de-services-Factors'); 
const CombustiblesFactors = mongoose.model('CombustiblesFactors',CategoryElementSchema, 'Combustibles-Factors');

const ProcessEtEmissionFugitivesFactors = mongoose.model('ProcessEtEmissionFugitivesFactors',CategoryElementSchema, 'Process-et-emission-fugitives-Factors');

const ElectriciteFactors = mongoose.model('ElectricitéFactors',CategoryElementSchema, 'Electricité-Factors');

const ReseauxDeChaleurEtFroidFactors = mongoose.model('ReseauxDeChaleurEtFroidFactors',CategoryElementSchema, 'Réseaux-de-chaleur-et-froid-Factors');

const StatistiquesTerritorialesFactors = mongoose.model('StatistiquesTerritoriales',CategoryElementSchema, 'Statistiques-territoriales');

const TraitementDesDechetsFactors = mongoose.model('TraitementDesDechetsFactors',CategoryElementSchema, 'Traitement-des-déchets-Factors'); 

const TransportDeMarchandisesFactor = mongoose.model('TransportDeMarchandisesFactors',CategoryElementSchema, 'Transport-de-marchandises-Factors');

const TransportDePersonnesFactors = mongoose.model('TransportDePersonnesFactors',CategoryElementSchema, 'Transport-de-personnes-Factors');

const UTCFFactors = mongoose.model('UTCFFactors',CategoryElementSchema, 'UTCF-Factors');


module.exports = {
    AchatsDeBiensFactors,
    AchatsDeService,
    CombustiblesFactors,
    ProcessEtEmissionFugitivesFactors,
    ElectriciteFactors,
    ReseauxDeChaleurEtFroidFactors,
    StatistiquesTerritorialesFactors,
    TraitementDesDechetsFactors,
    TransportDeMarchandisesFactor,
    TransportDePersonnesFactors,
    UTCFFactors
};
