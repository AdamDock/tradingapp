'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true, // or false, depending on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    // To revert the migration, remove the 'age' column
    await queryInterface.removeColumn('Users', 'age');
  },
};
