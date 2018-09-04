'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'jobs',
        'job_num'
      ),
      queryInterface.addColumn(
        'jobs',
        'job_num',
        {type: Sequelize.STRING}
        )
    ]
  },

  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'jobs',
        'job_num'
      ),
      queryInterface.addColumn(
        'jobs',
        'job_num',
        {type: Sequelize.STRING,
        allowNulls: false,
        primaryKey: true}
        )
    ]
    }
};
