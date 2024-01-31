const CPI = require('../models/MarketFactors/CPI');
const Inflation = require('../models/MarketFactors/inflation');
const InterestRates = require('../models/MarketFactors/interestRates');
const RealGDP = require('../models/MarketFactors/realGDP');
const TreasuryYields = require('../models/MarketFactors/treasuryYield');
const UnemploymentRate = require('../models/MarketFactors/unemploymentRate');
const axios = require('axios');
const request = require('request');

let data = [
    {
        name: "Consumer Price Index",
        fileName: "CPI",
        symbol: "CPI",
    },
    {
        name: "Inflation Rate",
        fileName: "inflation",
        symbol: "INFLATION",
    },
    {
        name: "Federal Funds Rate(Interest Rate)",
        fileName: "interestRates",
        symbol: "FEDERAL_FUNDS_RATE"
    },
    {
        name: "Real GDP",
        fileName: "realGDP",
        symbol: "REAL_GDP"

    },
    {
        name: "Treasury Yield",
        fileName: "treasuryYield",
        symbol: "TREASURY_YIELD"
    },
    {
        name: "Unemployment Rate",
        fileName: "unemploymentRate",
        symbol: "UNEMPLOYMENT"
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

const apiKey = '1Y6CMP0ZFOVJ5UQK';

seedAlpha = async (symbol, name, Model, realName) => {  
    const res = await axios.get(`https://www.alphavantage.co/query?function=${symbol}&interval=monthly&apikey=${apiKey}`);
    const result = res.data;
    const data = result.data;
    console.log(res);

    const correctFormat = data
        .filter(item => item.value !== null)
        .map(item => {
        price = parseFloat(item.value);
        console.log(price);
        return {
            date: item.date,
            value: price
        };
    })
    await Model.updateMany(
        { name: realName }, 
        { $unset: { data: "" } }
    );
    await Model.findOneAndUpdate(
        { name: realName }, 
        { $push: {data: { $each: correctFormat }}},
        { new: true, upsert: false }
    );
}

seedEarnings= async () => {
    
    for(i in data) {
        const Model = models[data[i].name];
        await seedAlpha(data[i].symbol, data[i].fileName, Model, data[i].name);
    }
    console.log("success");
}
    
seedEarnings();