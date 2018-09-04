'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'invoices', 'is_change_order', {type: Sequelize.BOOLEAN})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'invoices', 'is_change_order')
  }
};

