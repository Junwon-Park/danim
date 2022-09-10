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
      review_id: { type: DataTypes.BIGINT, allowNull: false },
      report_title: { type: DataTypes.STRING(50), allowNull: false },
      report_context: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Reports",
    }
  );
  return Reports;
};
