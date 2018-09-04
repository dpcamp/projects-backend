'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'jobs',
        'has_budget'
      ),
      queryInterface.addColumn(
        'jobs',
        'fund',
        {type: Sequelize.STRING}
        )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'jobs',
        'has_budget',
        {type: Sequelize.BOOLEAN}
      ),
      queryInterface.removeColumn(
        'jobs',
        'fund'
        )
    ]
  }
};
