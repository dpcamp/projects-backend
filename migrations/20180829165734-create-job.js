'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_num: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      job_desc: {
        type: Sequelize.TEXT
      },
      work_center: {
        type: Sequelize.INTEGER
      },
      mutual: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.DECIMAL
      },
      fund: {
        type: Sequelize.STRING
      },
      expenditure: {
        type: Sequelize.DECIMAL
      },
      has_budget: {
        type: Sequelize.BOOLEAN
      },
      year: {
        type: Sequelize.INTEGER
      },
      gl_num: {
        type: Sequelize.INTEGER
      },
      gl_desc: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jobs');
  }
};