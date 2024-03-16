const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define Schema
const EmissionSourceSchema = new Schema({
    index: {
        type: String,
        required: [true, 'Index field is required']
    },
    source: {
        type: String,
        required: [true, 'Source field is required']
    },
    category: {
        type: String,
        required: [true, 'Category field is required']
    },
    Scope: {
        type: Number,
        required: [true, 'Scope field is required']
    }
});

//create model
const EmissionSource = mongoose.model('Emission-source', EmissionSourceSchema);

//export model
module.exports = EmissionSource;