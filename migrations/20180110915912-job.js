'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jobs', 'created_by', {type: Sequelize.STRING})
      .then(function(){
      return queryInterface.addColumn(
          'jobs', 'assigned_to', {type: Sequelize.STRING})
          
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'jobs', 'created_by')
      .then(function(){
      return queryInterface.removeColumn(
          'jobs', 'assigned_to')
          
      });
  }
};
