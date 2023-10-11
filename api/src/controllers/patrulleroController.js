const { Patrullero } = require("../db");
const { Op } = require("sequelize");

const traerPatrulleros = async () => {
  try {
    let patrulleros = await Patrullero.findAll();
    return patrulleros;
  } catch (error) {
    throw new Error(error);
  }
}

const patrullerosPorGrupo = async () => {
  null
}

const crearPatrulleroDB = async (name, cuotas) => {
  try {
    let nuevoPatrullero = Patrullero.create({
      name,
      cuotas
      
    });
    return nuevoPatrullero;
  } catch (error) {
    throw new Error(error);
  }
};



const modificarPatrullero = async (id, name, cuotas) => {
  const [updatedCount, updatedRows] = await Group.update(
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
    
    if (!encontrarPatrullero) throw error("Providen id not found");

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