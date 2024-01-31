const CPI = require('../models/MarketFactors/CPI');
const Inflation = require('../models/MarketFactors/inflation');
const InterestRates = require('../models/MarketFactors/interestRates');
const RealGDP = require('../models/MarketFactors/realGDP');
const TreasuryYields = require('../models/MarketFactors/treasuryYield');
const UnemploymentRate = require('../models/MarketFactors/unemploymentRate');

let data = [
    {
        name: "Consumer Price Index",
        Description: "Consumer Price Index is the measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services.",
        unit: "Base 100 system with 1983=100"
    },
    {
        name: "Inflation Rate",
        Description: " Inflation rate is the percentage change in the price index from one year to the next.",
        unit: "Percent"
    },
    {
        name: "Federal Funds Rate(Interest Rate)",
        Description: "Interest rate is the rate charged to borrow money.",
        unit: "Percent"
    },
    {
        name: "Real GDP",
        Description: "Real GDP is the inflation-adjusted value of the goods and services produced by labor and property located in the United States.",
        unit: "Billions of dollars"
    },
    {
        name: "Treasury Yield",
        Description: "Treasury yield is the return on investment, expressed as a percentage, on the U.S. government's debt obligations.",
        unit: "Percent"
    },
    {
        name: "Unemployment Rate",
        Description: "Unemployment rate is the percentage of the total labor force that is unemployed but actively seeking employment and willing to work.",
        unit: "Percent"
    }

];
const models = {
    "Consumer Price Index": CPI,
    "Inflation Rate": Inflation,
    "Federal Funds Rate(Interest Rate)": InterestRates,
    "Real GDP": RealGDP,
    "Treasury Yield": TreasuryYields,
    "Unemployment Rate": UnemploymentRate
};
const initialNames = () => {
    data.forEach(async (item) => {
        
        const Model = models[item.name];
        const commodity = new Model({
            name: item.name,
            Description: item.Description,
            unit: item.unit,
            data: []
        });
        await commodity.save();
    });
};

initialNames();