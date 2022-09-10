"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Traveled_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Has
      models.Traveled_records.hasMany(models.Star_points, {
        sourceKey: "id",
        foreignKey: "records_id",
      });

      // Belongs
      models.Traveled_records.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      models.Traveled_records.belongsTo(models.Travel_places, {
        foreignKey: "place_id",
        targetKey: "id",
      });
    }
  }
  Traveled_records.init(
    {
      place_id: { type: DataTypes.BIGINT, allowNull: false },
      user_id: { type: DataTypes.BIGINT, allowNull: false },
      travel_infomation: DataTypes.TEXT,
      traveled_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Traveled_records",
      timestamps: false,
    }
  );
  return Traveled_records;
};
