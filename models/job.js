'use strict';
module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define('job', {
    job_num: DataTypes.STRING,
    proj_id: DataTypes.STRING,
    job_title: DataTypes.STRING,
    job_desc: DataTypes.TEXT,
    work_center: DataTypes.INTEGER,
    mutual: DataTypes.STRING,
    status: DataTypes.STRING,
    budget: DataTypes.DECIMAL,
    fund: DataTypes.STRING,
    expenditure: DataTypes.DECIMAL,
    bud_committed: DataTypes.DECIMAL,
    bud_uncommitted: DataTypes.DECIMAL,
    balance: DataTypes.DECIMAL,
    has_budget: DataTypes.BOOLEAN,
    year: DataTypes.INTEGER,
    gl_num: DataTypes.TEXT,
    gl_desc: DataTypes.TEXT,
    created_by: DataTypes.STRING,
    assigned_to: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    underscored: true,
  });
  job.associate = function(models) {
    // associations can be defined here
    job.hasMany(models.requisition, {foreignKey: 'proj_id', sourceKey: 'proj_id'})
    job.hasMany(models.invoice, {foreignKey: 'proj_id', sourceKey: 'proj_id'})
  };
  return job;
};