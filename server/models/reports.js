"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Reports.belongsTo(models.Reviews, {
        foreignKey: "review_id",
        targetKey: "id",
      });
    }
  }
  Reports.init(
    {
      review_id: DataTypes.INTEGER,
      report_title: DataTypes.STRING,
      report_context: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reports",
    }
  );
  return Reports;
};
