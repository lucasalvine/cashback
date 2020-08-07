"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        require: true,
        unique: true,
        allowNull: true,
        type: Sequelize.STRING,
      },
      value: {
        require: true,
        allowNull: true,
        type: Sequelize.STRING,
      },
      date: {
        require: true,
        allowNull: true,
        type: Sequelize.DATE,
      },
      document: {
        require: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        require: true,
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Orders");
  },
};
