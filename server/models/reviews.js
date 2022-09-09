"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Has
      models.Reviews.hasMany(models.Reports, {
        sourceKey: "id",
        foreignKey: "review_id",
      });

      // Belongs
      models.Reviews.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  Reviews.init(
    {
      user_id: DataTypes.INTEGER,
      review_image: DataTypes.STRING,
      review_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};
