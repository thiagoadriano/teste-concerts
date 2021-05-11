const { Model, DataTypes } = require("sequelize");

const _model = {
  date: DataTypes.DATE,
  meantemp: DataTypes.DOUBLE,
  humidity: DataTypes.DOUBLE,
  wind_speed: DataTypes.DOUBLE,
  meanpressure: DataTypes.DOUBLE,
};

class ClimateModel extends Model {
  static init(sequelize) {
    super.init(_model, { sequelize, modelName: "climate" });
  }
}

module.exports = ClimateModel;
