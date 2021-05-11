const { Sequelize } = require("sequelize");
const ClimateModel = require("../models/climateModel");
const config = require("./dbEnvConfig");

class DbConfig {
  DbConfig() {
    this.init();
  }
  init() {
    let conn = new Sequelize(config);
    ClimateModel.init(conn);
  }
}

module.exports = DbConfig;
