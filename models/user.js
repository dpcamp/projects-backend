'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    access_level: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    user.hasMany(models.job, {foreignKey: 'assigned_to', sourceKey: 'username'})
  };
  return user;
};