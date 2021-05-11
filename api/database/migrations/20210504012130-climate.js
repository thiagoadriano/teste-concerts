"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("climate", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      meantemp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      humidity: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      wind_speed: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      meanpressure: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("climate");
  },
};
