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
      place_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      travel_infomation: DataTypes.STRING,
      traveled_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Traveled_records",
      timestamps: false,
    }
  );
  return Traveled_records;
};
