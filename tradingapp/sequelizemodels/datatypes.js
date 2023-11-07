const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import your initialized Sequelize instance

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Add more attributes as needed
});

module.exports = User;
