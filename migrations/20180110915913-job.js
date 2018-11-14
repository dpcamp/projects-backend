'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'jobs', 'modified_by', {type: Sequelize.STRING})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'jobs', 'modified_by')

  }
};
