'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      primaryKey:true},
      name: DataTypes.STRING,
      access_level: DataTypes.INTEGER,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    user.hasMany(models.job, {foreignKey: 'assigned_to', sourceKey: 'username'})
  };
  return user;
};