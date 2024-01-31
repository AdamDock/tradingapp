const Aluminum = require('../models/commodities/aluminum');
const Coffee = require('../models/commodities/coffee');
const Copper = require('../models/commodities/copper');
const Corn = require('../models/commodities/corn');
const Cotton = require('../models/commodities/cotton');
const CrudeOil = require('../models/commodities/crudeOil');
const BrentOil = require('../models/commodities/brentOil');
const GlobalPriceIndex = require('../models/commodities/globalPriceIndex');
const NaturalGas = require('../models/commodities/naturalGas');
const Sugar = require('../models/commodities/sugar');
const Wheat = require('../models/commodities/wheat');

module.exports.viewCommodities = async (req, res) => {
    try {
        const commodities = await Promise.all([
            Aluminum.find({}),
            Coffee.find({}),
            Copper.find({}),
            Corn.find({}),
            Cotton.find({}),
            CrudeOil.find({}),
            BrentOil.find({}),
            GlobalPriceIndex.find({}),
            NaturalGas.find({}),
            Sugar.find({}),
            Wheat.find({})
        ]);
        res.status(200).json(commodities);
    } catch (error) {
        console.error('Error viewing commodities:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}