//Router de Cate
const { Router } = require("express");
const {
  getGroups,
  createGroupDB,
  groupsByName,
  groupsByStatus,
} = require("../controllers/groupController");
// const { Group } = require("../db");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const { status } = req.query;
    let groups;
    if (name) {
      //Si existe nombre, buscarlo
      groups = await groupsByName(name);
      return res.status(200).json(groups);
    } else if (status) {
      //Si existe status, buscarlo
      groups = await groupsByStatus(status);
      return res.status(200).json(groups);
    } else {
      //Si no se manda un nombre/status, buscar todos
      groups = await getGroups();
      if (groups.length === 0) {
        return res.status(200).send("No se encontraron Grupos");
      }
      return res.status(200).json(groups);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//Crear Grupo
router.post("/", async (req, res) => {
  try {
    const {
      name,
      meaning,
      release_date,
      manager,
      status,
      acronym
    } = req.body;

    //Crearlo
    const newGroup = await createGroupDB(
      name,
      meaning,
      release_date,
      manager,
      status,
      acronym,
    );

    //Retornarlo
    res.status(200).json(newGroup);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
