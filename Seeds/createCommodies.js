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

let data = [
    {
        name: "Crude Oil",
        fileName: "crudeOil",
        Description: "Crude oil is a naturally occurring, unrefined petroleum product composed of hydrocarbon deposits and other organic materials. A type of fossil fuel, crude oil can be refined to produce usable products such as gasoline, diesel and various forms of petrochemicals.",
    },
    {
        name: "Brent Oil",
        fileName: "brentOil",
        Description: "Brent Crude is a major trading classification of sweet light crude oil that serves as one of the two main benchmark prices for purchases of oil worldwide, the other being West Texas Intermediate.",
    },
    {
        name: "Global Price Index",
        fileName: "globalPriceIndex",
        Description: "The Global Price Index (GPI) is a measure of the relative change in the price of a basket of goods and services representative of the world economy. It is calculated by taking the price changes for each item in the predetermined basket of goods and averaging them.",
    },
    {
        name: "Aluminum",
        fileName: "aluminum",
        Description: "Aluminum is a lightweight, strong and flexible metal that resists corrosion and is 100 per cent recyclable. It is a common material in vehicles, buildings, consumer goods, packaging, power transmission and electronics.",
    },
    {
        name: "Coffee",
        fileName: "coffee",
        Description: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried.",
    },
    {
        name: "Copper",
        fileName: "copper",
        Description: "Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.",
    },
    {
        name: "Corn",
        fileName: "corn",
        Description: "Corn is a starchy vegetable and cereal grain that has been eaten all over the world for centuries. It's rich in fiber, vitamins and minerals. However, the health benefits of corn are controversial — while it contains beneficial nutrients, it can also spike blood sugar levels.",
    },
    {
        name: "Cotton",
        fileName: "cotton",
        Description: "Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose. Under natural conditions, the cotton bolls will increase the dispersal of the seeds.",
    },
    {
        name: "Natural Gas",
        fileName: "naturalGas",
        Description: "Natural gas is a fossil fuel. Natural gas is a non-renewable hydrocarbon used as a source of energy for heating, cooking, and electricity generation. It is also used as a fuel for vehicles and as a chemical feedstock in the manufacture of plastics and other commercially important organic chemicals.",
    },
    {
        name: "Sugar",
        fileName: "sugar",
        Description: "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Table sugar, granulated sugar, or regular sugar, refers to sucrose, a disaccharide composed of glucose and fructose.",
    },
    {
        name: "Wheat",
        fileName: "wheat",
        Description: "Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat.",
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
const initialNames = () => {
    data.forEach(async (item) => {
        
        const Model = models[item.name];
        const commodity = new Model({
            name: item.name,
            Description: item.Description,
            data: []
        });
        await commodity.save();
    });
};

initialNames();