const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "patrullero",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      cuotas: {
        type: DataTypes.STRING
      },
      grupo: {
        type: DataTypes.STRING
      }
      // campamento: {
      //   type: DataTypes.STRING,
      //   defaultValue: "0"
      // },
      // hermanos: {
      //   type: DataTypes.STRING,
      //   defaultValue: "No"
      // }
    },
    { timestamps: false }
  );
};