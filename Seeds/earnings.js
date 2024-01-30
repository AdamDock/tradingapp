const Stock = require('../models/stock');
const axios = require('axios');
const { StringStream } = require('scramjet');
const request = require('request');

const apiKey = 'DYJQ11FVVN0I8LM0';
// const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;


seedEarnings = async () => {  
    let index = 0;
    const earnings = await request.get(`https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=12month&apikey=${apiKey}`)
    .pipe(new StringStream())
    .CSVParse()                                   // parse CSV output into row objects
    .consume(async object => {
        if (index > 0) { // Skip the first row
            const symbol = object[0];
            const earningsDate = object[2];

        await Stock.findOneAndUpdate(
            { symbol: symbol }, 
            { $push: {earningsDate: earningsDate }},
            { new: true, upsert: false }
        );
    }
    index++;
})
    .then(() => console.log("success"));
}

seedEarnings();