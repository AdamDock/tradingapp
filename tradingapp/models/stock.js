const mongoose = require('../db/connect');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    ID: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Sector: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    founded: {
        type: String,
        required: true
    },
    earningsDate: [{
        type: String,
    }],
});

let Stock;
if (mongoose.models.Stock) {
    Stock = mongoose.model('Stock');
} else {
    Stock = mongoose.model('Stock', stockSchema);
}

module.exports = Stock; // Exporting the Stock model


