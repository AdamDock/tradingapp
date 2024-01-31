const mongoose = require('../../db/connect');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
}, { _id: false });

const UnemploymentRateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    data: [DataSchema]
});

module.exports = mongoose.models.UnemploymentRate || mongoose.model('UnemploymentRate', UnemploymentRateSchema);