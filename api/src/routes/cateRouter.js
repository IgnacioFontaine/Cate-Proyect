//Router de Cate
const { Router } = require("express");
const {
  getGroups,
  createGroupDB,
  groupsByName,
} = require("../controllers/groupController");
// const { Group } = require("../db");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let groups;
    if (name) {
      //Si existe nombre, buscarlo
      groups = await groupsByName(name);
      return res.status(200).json(groups);
    } else {
      //Si no se manda un nombre, buscar todos
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
      release_date,
      meaning,
      manager,
      principal_img,
      all_img,
      status,
    } = req.body;

    //Crearlo
    const newGroup = await createGroupDB(
      name,
      meaning,
      manager,
      principal_img,
      all_img,
      status,
      release_date
    );

    //Retornarlo
    res.status(200).json(newGroup);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
