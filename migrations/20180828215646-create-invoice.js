'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invoices', {
      inv_num: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      inv_date: {
        type: Sequelize.DATE
      },
      change_order: {
        type: Sequelize.STRING
      },
      req_balance: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.STRING
      },
      net_amount: {
        type: Sequelize.DECIMAL
      },
      appr_amount: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('invoices');
  }
};