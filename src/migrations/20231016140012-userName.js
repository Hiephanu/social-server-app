'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('comments', 'userName', {
      type: Sequelize.STRING,
      allowNull: true, // or false, depending on your requirements
      defaultValue: null, // or a default value
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('comments', 'userName');
  }
};
