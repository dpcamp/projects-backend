'use strict';
module.exports = (sequelize, DataTypes) => {
  const requisition = sequelize.define('requisition', {
    req_num: DataTypes.STRING,
    req_desc: DataTypes.STRING,
    po_num: DataTypes.STRING,
    proj_id: DataTypes.STRING,
    change_order: DataTypes.STRING,
    co: DataTypes.STRING,
    line_num: DataTypes.INTEGER,
    gl_code: DataTypes.INTEGER,
    line_name: DataTypes.STRING,
    name: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    underscored: true,
  });
  requisition.associate = function(models) {
    // associations can be defined here
    requisition.belongsTo(models.job, {foreignKey: 'proj_id', targetKey: 'proj_id'})
  };
  return requisition;
};