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
  manager,
  principal_img,
  all_img,
  status,
  release_date
) => {
  try {
    let newGroup = Group.create({
      name,
      meaning,
      manager,
      principal_img,
      all_img,
      status,
      release_date,
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
      include: {
        model: Group,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (results.length) {
      results = results.map((group) => {
        return {
          id: group.id,
          name: group.name,
          released: group.released,
          meaning: group.meaning,
          manager: group.manager,
          principal_img: group.principal_img,
          all_img: group.all_img,
          status: group.status,
        };
      });
    }

    foundGroup = [...results];

    //Si foundGroup no tiene nada, no encontró el juego
    if (foundGroup.length == 0)
      throw new Error("No fue posible encontrar el Grupo");
    return foundGroup;
  } catch (error) {
    throw new Error(error);
  }
};

const groupByStatus = async (status) => {
  try {
    let foundGroup = [];

    //Búsqueda en la DB
    let results = await Group.findAll({
      where: {
        //Busca los nombres similares a lo enviado en "name"
        status: status,
      },
      include: {
        model: Group,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (results.length) {
      results = results.map((group) => {
        return {
          id: group.id,
          name: group.name,
          released: group.released,
          meaning: group.meaning,
          manager: group.manager,
          principal_img: group.principal_img,
          all_img: group.all_img,
          status: group.status,
        };
      });
    }

    foundGroup = [...results];

    //Si foundGroup no tiene nada, no encontró el juego
    if (foundGroup.length == 0)
      throw new Error("No fue posible encontrar Grupos con ese estado");
    return foundGroup;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getGroups,
  createGroupDB,
  groupsByName,
  groupByStatus,
};
