const sequelize = require('./db'); // Import your Sequelize instance
const User = require('./models/user'); // Import your models

(async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
})();
const sequelize = require('./config'); // Import your Sequelize configuration

// Create the database
async function createDatabase() {
  try {
    await sequelize.sync(); // This creates the database if it doesn't exist
    console.log('Database has been created.');
  } catch (error) {
    console.error('Error creating the database:', error);
  }
}

createDatabase();
