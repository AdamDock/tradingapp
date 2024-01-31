const crudeOil = require("../models/commodities/crudeOil");
const brentOil = require("../models/commodities/brentOil");
const globalPriceIndex = require("../models/commodities/globalPriceIndex");
const aluminum = require("../models/commodities/aluminum");
const coffee = require("../models/commodities/coffee");
const copper = require("../models/commodities/copper");
const corn = require("../models/commodities/corn");
const cotton = require("../models/commodities/cotton");
const naturalGas = require("../models/commodities/naturalGas");
const sugar = require("../models/commodities/sugar");
const wheat = require("../models/commodities/wheat");

const axios = require('axios');
const request = require('request');
data = [
    {
        realName: "Global Price Index",
        name: "GlobalPriceIndex",
        symbol: "ALL_COMMODITIES",
    },
    {
        realName: "Crude Oil",
        name: "CrudeOil",
        symbol: "WTI",
    },
    {
        realName: "Brent Oil",
        name: "BrentOil",
        symbol: "BRENT",
    },
    {
        realName: "Natural Gas",
        name: "NaturalGas",
        symbol: "NATURAL_GAS",
    },
    {
        realName: "Copper",
        name: "Copper",
        symbol: "COPPER"
    },
    {
        realName: "Aluminum",
        name: "Aluminum",
        symbol: "ALUMINUM",
    },
    {
        realName: "Wheat",
        name: "Wheat",
        symbol: "WHEAT",
    },
    {
        realName: "Corn",
        name: "Corn",
        symbol: "CORN",
    },
    {
        realName: "Cotton",
        name: "Cotton",
        symbol: "COTTON",
    },
    {
        realName: "Sugar",
        name: "Sugar",
        symbol: "SUGAR",
    },
    {
        realName: "Coffee",
        name: "Coffee",
        symbol: "COFFEE",
    },
];
const models = {
    "Crude Oil": crudeOil,
    "Brent Oil": brentOil,
    "Global Price Index": globalPriceIndex,
    "Aluminum": aluminum,
    "Coffee": coffee,
    "Copper": copper,
    "Corn": corn,
    "Cotton": cotton,
    "Natural Gas": naturalGas,
    "Sugar": sugar,
    "Wheat": wheat
};



const apiKey = 'DYJQ11FVVN0I8LM0';
var url = 'https://www.alphavantage.co/query?function=WTI&interval=monthly&apikey=demo';

seedAlpha = async (symbol, name, Model, realName) => {  
    const res = await axios.get(`https://www.alphavantage.co/query?function=${symbol}&interval=monthly&apikey=${apiKey}`);
    console.log(res.data);
    const result = res.data;
    const data = result.data;

    const correctFormat = data
    .filter(item => item.value !== null)
    .map(item => {
        const price = parseFloat(item.value);
        if (isNaN(price)) {
            return null;
        }
        return {
            date: item.date,
            price: price
        };
    })
    .filter(item => item !== null);

    await Model.findOneAndUpdate(
        { name: realName }, 
        { $push: {data: { $each: correctFormat }}},
        { new: true, upsert: false }
    );
}

seedEarnings= async () => {
    
    for(i in data) {
        const Model = models[data[i].realName];
        await seedAlpha(data[i].symbol, data[i].name, Model, data[i].realName);
    }
    console.log("success");
}
    
seedEarnings();