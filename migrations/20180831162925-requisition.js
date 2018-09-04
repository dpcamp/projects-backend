'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('requisitions')
    .then(function(){
      return queryInterface.createTable('requisitions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        req_num: {
          type: Sequelize.STRING
        },
        req_desc: {
          type: Sequelize.STRING
        },
        po_num: {
          type: Sequelize.STRING
        },
        job_num: {
          type: Sequelize.STRING
        },
        proj_id: {
          type: Sequelize.STRING
        },
        change_order: {
          type: Sequelize.STRING
        },
        co: {
          type: Sequelize.STRING
        },
        line_num: {
          type: Sequelize.INTEGER
        },
        line_name: {
          type: Sequelize.STRING
        },
        amount: {
          type: Sequelize.DECIMAL(19,2)
        },
        gl_code: {
          type: Sequelize.INTEGER
        },
        description: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
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
    })
    

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('requisitions')
    .then(function(){
      return queryInterface.createTable('requisitions', {
        req_num: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        po_num: {
          type: Sequelize.STRING
        },
        change_order: {
          type: Sequelize.STRING
        },
        line_num: {
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        total_approp: {
          type: Sequelize.DECIMAL
        },
        balance: {
          type: Sequelize.DECIMAL
        },
        gl_code: {
          type: Sequelize.INTEGER
        },
        description: {
          type: Sequelize.STRING
        },
        expended: {
          type: Sequelize.DECIMAL
        },
        name: {
          type: Sequelize.STRING
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
    })
  }
};
