'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.addColumn(
        'jobs',
        'balance',
        {type: Sequelize.DECIMAL}
        )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('jobs','balance');
  }
};
