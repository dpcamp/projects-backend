'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jobs', 'bud_commited', {type: Sequelize.DECIMAL(19, 4)})
      .then(function(){
      return queryInterface.addColumn(
          'jobs', 'bud_uncommited', {type: Sequelize.DECIMAL(19, 4)})
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'jobs', 'bud_commited')
      .then(function(){
      return queryInterface.removeColumn(
          'jobs', 'bud_uncommited')
      });
  }
};