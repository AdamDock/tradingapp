const mongoose = require('mongoose');
const Holiday = require('../models/holiday');
const fetch = require('isomorphic-fetch');

const MongoDB_URI = 'mongodb://localhost:27017/trading';

mongoose.connect(MongoDB_URI, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const seedEvents = async () => {
  try {
    const apiKey = 'b0AH09IUEVj7kFEwAWsmPj4qxCecNX94';
    const endpoint = `https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${apiKey}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // Ensure the MongoDB connection is open before saving events
    if (mongoose.connection.readyState !== 1) {
      throw new Error('MongoDB connection is not open');
    }

    // Clear existing data
    await Holiday.deleteMany({});

    // Use the correct model name (Holiday) instead of lowercase 'holiday'
    const newHolidays = data.map((holiday) => {
      return new Holiday({
        date: holiday.date,
        name: holiday.name,
        exchange: holiday.exchange,
        status: holiday.status,
      });
    });

    // Save all holidays using Promise.all
    await Promise.all(newHolidays.map((h) => h.save()));

    console.log({ success: true, data });
  } catch (error) {
    console.error('Error:', error.message);
    console.log({ error: 'Internal Server Error' });
  } finally {
    // Close the MongoDB connection after the operation is complete
    mongoose.connection.close();
  }
};

seedEvents();
