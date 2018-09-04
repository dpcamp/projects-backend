'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('jobs', 'balance', Sequelize.DECIMAL);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('jobs','balance');
  }
};
