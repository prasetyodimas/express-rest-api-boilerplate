'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsToMany(models.Department, {
        as: 'departments',
        foreignKey: 'project_id',
        through: 'Projectdepartment'
      });
    }
  };
  Project.init({
    project_head: DataTypes.STRING,
    project_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};