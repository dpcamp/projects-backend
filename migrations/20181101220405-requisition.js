'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'requisitions', 'expended', {type: Sequelize.DECIMAL})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'requisitions', 'expended')
  }
};
