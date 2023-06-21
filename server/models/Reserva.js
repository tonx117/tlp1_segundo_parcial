// TODO: Crear modelo de datos de Reserva
const { sequelize, DataTypes } = require("../db");

const Reserva = sequelize.define(
  "Reserva",
  {
    cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codreserva: {
      type: DataTypes.INET,
      allowNull: false,
    },
    fechareserva: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "Reserva",
  }
);
// Crear tabla si no existe
Reserva.sync();

module.exports = Reserva;
