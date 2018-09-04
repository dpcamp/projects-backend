'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jobs', 'commited', {type: Sequelize.DECIMAL(19, 4)})
      .then(function(){
      return queryInterface.addColumn(
          'jobs', 'uncommited', {type: Sequelize.DECIMAL(19, 4)})
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'jobs', 'commited')
      .then(function(){
      return queryInterface.removeColumn(
          'jobs', 'uncommited')
      });
  }
};
