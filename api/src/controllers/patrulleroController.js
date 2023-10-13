const { Patrullero } = require("../db");
const {Group} = require("../db");
const { Op } = require("sequelize");

const traerPatrulleros = async () => {
  try {
    let patrulleros = await Patrullero.findAll();
    return patrulleros;
  } catch (error) {
    throw new Error(error);
  }
}

const patrullerosPorGrupo = async (grupo) => {
  try {
    let patrulleros = await Patrullero.findAll({
      where:{Group:{name:grupo}}
    });
    return patrulleros;
  } catch (error) {
    throw new Error(error);
  }
}

const crearPatrulleroDB = async (name, cuotas) => {
  try {
    let nuevoPatrullero = await Patrullero.create({
      name,
      cuotas,
      // campamento,
      // hermanos
    });
    return nuevoPatrullero;
  } catch (error) {
    throw new Error(error);
  }
};


const modificarPatrullero = async (id, name, cuotas) => {
  const [updatedCount, updatedRows] = await Patrullero.update(
            { name: name, cuotas:cuotas },
            { where: { id } }
        );
        if (updatedCount === 0) {
            throw new Error('ID inexistente o no encontrado');
        }

    return { message: "Informacion modificada" };
}

const eliminarPatrullero = async (id) => {
      const encontrarPatrullero = await Patrullero.findOne({ where: { id } });
    
    if (!encontrarPatrullero) throw error("Id enviado no encontrado");

    await encontrarPatrullero.destroy();
    return {message: "Patrullero Eliminado"}
}

module.exports = {
  traerPatrulleros,
  crearPatrulleroDB,
  patrullerosPorGrupo,
  modificarPatrullero,
  eliminarPatrullero,
};