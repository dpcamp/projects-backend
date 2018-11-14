'use strict';
module.exports = (sequelize, DataTypes) => {
  const invoice = sequelize.define('invoice', {
    inv_num:  DataTypes.STRING,    
    inv_name:  DataTypes.STRING,    
    inv_date:  DataTypes.DATE,
    po_num:  DataTypes.STRING,     
    net_amount:  DataTypes.DECIMAL,    
    appr_amount:  DataTypes.DECIMAL,    
    is_paid:  DataTypes.BOOLEAN,
    is_change_order:  DataTypes.BOOLEAN,     
    inv_desc:  DataTypes.STRING,    
    line_num:  DataTypes.INTEGER,    
    line_name:  DataTypes.STRING,    
    amount:  DataTypes.DECIMAL,    
    description:  DataTypes.STRING,    
    comment:  DataTypes.STRING,    
  }, {
    underscored: true,
  });
  invoice.associate = function(models) {
    //requisition.belongsTo(models.requisition, {foreignKey: 'po_num', targetKey: 'po_num'})
  };
  return invoice;
};
