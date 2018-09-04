'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('requisitions', {
      req_num: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      po_num: {
        type: Sequelize.STRING
      },
      change_order: {
        type: Sequelize.STRING
      },
      line_num: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      total_approp: {
        type: Sequelize.DECIMAL
      },
      balance: {
        type: Sequelize.DECIMAL
      },
      gl_code: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      expended: {
        type: Sequelize.DECIMAL
      },
      name: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('requisitions');
  }
};