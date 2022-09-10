"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Star_points extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Belongs
      models.Star_points.belongsTo(models.Traveled_records, {
        foreignKey: "records_id",
        targetKey: "id",
      });
    }
  }
  Star_points.init(
    {
      record_id: { type: DataTypes.BIGINT, allowNull: false },
      point: { type: DataTypes.INTEGER(5), allowNull: false, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Star_points",
    }
  );
  return Star_points;
};
