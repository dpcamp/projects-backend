'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jobs', 'proj_id', {type: Sequelize.STRING})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'jobs', 'proj_id')

  }
};
