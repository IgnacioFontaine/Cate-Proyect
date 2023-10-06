const { Group } = require("../db");
const { Op } = require("sequelize");

//Obtener géneros
const getGroups = async () => {
  try {
    let groups = await Group.findAll();
    return groups;
  } catch (error) {
    throw new Error(error);
  }
};

const createGroupDB = async (
  name,
  meaning,
  release_date,
  manager,
  status,
  acronym
  
) => {
  try {
    let newGroup = Group.create({
      name,
      meaning,
      release_date,
      manager,
      status,
      acronym
      
    });
    return newGroup;
  } catch (error) {
    throw new Error(error);
  }
};

const groupsByName = async (name) => {
  try {
    let foundGroup = [];

    //Búsqueda en la DB
    let results = await Group.findAll({
      where: {
        //Busca los nombres similares a lo enviado en "name"
        name: { [Op.iLike]: `%${name}%` },
      },
      // include: {
      //   model: Group,
      //   attributes: ["name"],
      //   through: {
      //     attributes: [],
      //   },
      // },
    });
    if (results.length) {
      results = results.map((group) => {
        return {
          id: group.id,
          name: group.name,
          meaning: group.meaning,               
          release_date: group.release_date,
          manager: group.manager,
          status: group.status,
          acronym:group.acronym
        };
      });
    }

    foundGroup = [...results];

    //Si foundGroup no tiene nada, no encontró el grupo
    if (foundGroup.length == 0)
      throw new Error("No fue posible encontrar el Grupo");
    return foundGroup;
  } catch (error) {
    throw new Error(error);
  }
};

const groupsByStatus = async (status) => {
  try {
    let foundGroup = [];

    //Búsqueda en la DB
    let results = await Group.findAll({
      where: {
        //Busca los nombres similares a lo enviado en "name"
        status: status,
      },
      // include: {
      //   model: Group,
      //   attributes: ["name"],
      //   through: {
      //     attributes: [],
      //   },
      // },
    });
    if (results.length) {
      results = results.map((group) => {
        return {
          id: group.id,
          name: group.name,
          meaning: group.meaning,               
          release_date: group.release_date,
          manager: group.manager,
          status: group.status,
          acronym: group.acronym
        };
      });
    }

    foundGroup = [...results];

    //Si foundGroup no tiene nada, no encontró el grupo
    if (foundGroup.length == 0)
      throw new Error("No fue posible encontrar Grupos con ese estado");
    return foundGroup;
  } catch (error) {
    throw new Error(error);
  }
};


const updatedGroup = async ( id, name, meaning,release_date, manager, status, acronym) => {

        const [updatedCount, updatedRows] = await Group.update(
            { name: name, meaning: meaning,release_date : release_date ,manager: manager, status: status,acronym: acronym },
            { where: { id } }
        );
        if (updatedCount === 0) {
            throw new Error('The id was not found or it is incorrect');
        }

    return { message: "updated information" };
};

const deleteGroup = async (id) => {

    const findGroup = await Group.findOne({ where: { id } });
    
    if (!findGroup) throw error("Providen id not found");

    await findGroup.destroy();
    return {message: "Delete success"}
};

module.exports = {
  getGroups,
  createGroupDB,
  groupsByName,
  groupsByStatus,
  updatedGroup,
  deleteGroup
};
