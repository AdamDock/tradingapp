const CPI = require('../models/MarketFactors/CPI');
const RealGDP = require('../models/MarketFactors/realGDP');
const Inflation = require('../models/MarketFactors/inflation');
const InterestRates = require('../models/MarketFactors/interestRates');
const TreasuryYields = require('../models/MarketFactors/treasuryYield');
const UnemploymentRate = require('../models/MarketFactors/unemploymentRate');


module.exports.getMarketFactors = async (req, res) => {
    try {
        const data = await Promise.all([
            CPI.find(),
            RealGDP.find(),
            Inflation.find(),
            InterestRates.find(),
            TreasuryYields.find(),
            UnemploymentRate.find()
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}