const mongoose = require('../db/connect');
const Schema = mongoose.Schema;

const HolidaySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    exchange: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

module.exports = mongoose.models.Holiday || mongoose.model('Holiday', HolidaySchema);