const CPI = require('../models/MarketFactors/CPI');


const deleteCPI = async () => {
    try {
        await CPI.deleteMany({ name: { $exists: false } });
        console.log('CPI without name deleted');
    } catch (error) {
        console.log(error);
    }
}
deleteCPI();