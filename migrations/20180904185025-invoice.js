'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'invoices', 'proj_id', {type: Sequelize.STRING})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'invoices', 'proj_id')
  }
};
