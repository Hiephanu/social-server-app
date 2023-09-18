'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'group', {
      type: Sequelize.JSON, // Sử dụng kiểu dữ liệu JSON
      defaultValue: [] // Mặc định là một mảng JSON trống
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'group');
  }
};