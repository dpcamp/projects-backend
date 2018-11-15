'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'invoices', 'created_by', {type: Sequelize.DECIMAL(19, 4)})
      .then(function(){
      return queryInterface.addColumn(
          'invoices', 'updated_by', {type: Sequelize.DECIMAL(19, 4)})
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'invoices', 'created_by')
      .then(function(){
      return queryInterface.removeColumn(
          'invoices', 'updated_by')
      });
  }
};