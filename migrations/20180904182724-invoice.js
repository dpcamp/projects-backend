'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('invoices')
    .then(function(){
      return queryInterface.createTable('invoices', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        inv_num: {
          type: Sequelize.STRING
        },
        inv_name: {
          type: Sequelize.STRING
        },
        inv_date: {
          type: Sequelize.DATE
        },
        net_amount: {
          type: Sequelize.DECIMAL(19,2)
        },
        appr_amount: {
          type: Sequelize.DECIMAL(19,2)
        },
        is_paid: {
          type: Sequelize.BOOLEAN
        },
        inv_desc : {
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
        description: {
          type: Sequelize.STRING
        },
        comment: {
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
    return queryInterface.dropTable('invoices')
    .then(function(){
      return queryInterface.createTable('invoices', {
        inv_num: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        paid: {
          type: Sequelize.BOOLEAN
        },
        inv_date: {
          type: Sequelize.DATE
        },
        change_order: {
          type: Sequelize.STRING
        },
        req_balance: {
          type: Sequelize.DECIMAL
        },
        description: {
          type: Sequelize.STRING
        },
        net_amount: {
          type: Sequelize.DECIMAL
        },
        appr_amount: {
          type: Sequelize.DECIMAL
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
