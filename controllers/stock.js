const Stock = require('../models/stock');

module.exports.viewStockEarnings = async (req, res) => {
    try {
        const earnings = await Stock.find().select('symbol name _id earningsDate Sector');
        res.status(200).json(earnings);
    } catch (error) {
        console.error('Error viewing stock earnings:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}