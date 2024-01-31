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

const RealGDPSchema = new Schema({
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
    },
    data: [DataSchema]
});

module.exports = mongoose.models.RealGDP || mongoose.model('RealGDP', RealGDPSchema);