const Holiday = require('../models/holiday');
const mongoose = require('mongoose');

module.exports.viewHolidays = async (req, res) => {
    try {
        const events = await Holiday.find({});
        console.log(events);
        res.status(200).json(events);
    } catch (error) {
        console.error('Error viewing events:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}