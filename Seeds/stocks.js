/*const wiki = require('wikijs').default;
const data = {}

wiki()
    .page('List of S&P 500 companies')
    .then(page => page.tables())
    .then(tables => {
        let table = tables[0];
        console.log(table);
        for(i in table) {
                let symbol = table[i]['tickerSymbol'].split('}}')[0];
                let security = table[i]['security'];
                data[symbol] = security;
        }
        console.log(data);
    });*/
   /* const cheerio = require('cheerio');
    const axios = require('axios');
    
    axios.get('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
        .then(response => {
            const $ = cheerio.load(response.data);
            const data = {};
    
            $('table.wikitable:first tr').each((i, element) => {
                const cells = $(element).find('td');
    
                if (cells.length > 0) {
                    const ID = $(cells[6]).text().trim();
                    const tickerSymbol = $(cells[0]).text().trim();
                    const companyName = $(cells[1]).text().trim();
                    const sector = $(cells[2]).text().trim();
                    const location = $(cells[4]).text().trim();
                    const founded = $(cells[7]).text().trim();
    
                }
            });
    
            console.log(data);
        });*/

        const mongoose = require('mongoose');
        const Stock = require('../models/stock');
        const fetch = require('isomorphic-fetch');
        const cheerio = require('cheerio');
        const axios = require('axios');
        
        

        seedStocks = async () => {
            await Stock.deleteMany({});
            try {
                const response = await fetch('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies');
                const html = await response.text();
                const $ = cheerio.load(html);
                const data = [];
                $('table.wikitable:first tr').each((i, element) => {
                    const cells = $(element).find('td');
                    if (cells.length > 0) {
                        const ID = $(cells[6]).text().trim();
                        const symbol = $(cells[0]).text().trim();
                        const name = $(cells[1]).text().trim();
                        const Sector = $(cells[2]).text().trim();
                        const location = $(cells[4]).text().trim();
                        const founded = $(cells[7]).text().trim();
                        data.push({
                            ID,
                            symbol,
                            name,
                            Sector,
                            location,
                            founded
                        });
                    }
                });
                await Stock.insertMany(data);
                console.log('Stocks seeded');
            } catch (error) {
                console.error('Error seeding stocks:', error);
            }
        }

        seedStocks();
