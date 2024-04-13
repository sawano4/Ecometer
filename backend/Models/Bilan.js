const mongoose = require('mongoose');

// Define schema for emission posts
const emissionPostSchema = new mongoose.Schema({
    index: Number,
    category: String,
    postName: String,
    scope: String,
    emissions: { type: Number, default: 0 }, // Default value is 0 for emissions
    categoryElements: { type: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'category' }], default: [] } // default value is an empty array , the model depends on the category 
});

// Define schema for carbon footprint document
const carbonFootprintSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    emissionPosts: [emissionPostSchema],
    createdAt: { type: Date, default: Date.now } // Default value is the current date and time
});

const bilansConnection = mongoose.createConnection(process.env.BILANS_URL);
// Add error handling
bilansConnection.on('error', console.error.bind(console, 'connection error:'));
bilansConnection.once('open', function() {
  console.log("Database connection successful");
});


// Create model for carbon footprint
const CarbonFootprint = mongoose.model('CarbonFootprint', carbonFootprintSchema,'carbonFootprints');

module.exports = CarbonFootprint;
