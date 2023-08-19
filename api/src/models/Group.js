const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "group",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      meaning: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
      },
      manager: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      principal_img: {
        type: DataTypes.STRING,
      },
      all_img: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
