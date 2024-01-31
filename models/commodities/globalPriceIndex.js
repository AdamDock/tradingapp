const mongoose = require('../../db/connect');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { _id: false });

const GlobalPriceIndexSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    data: [DataSchema]
});

module.exports = mongoose.models.GlobalPriceIndex || mongoose.model('GlobalPriceIndex', GlobalPriceIndexSchema);