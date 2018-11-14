'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'requisitions', 'rec_id', {type: Sequelize.STRING})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'requisitions', 'rec_id')
  }
};
