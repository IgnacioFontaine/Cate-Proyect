//Router de Cate
const { Router } = require("express");
const { getGroups } = require("../controllers/groupController");
// const { Group } = require("../db");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let groups;
    if (name) {
      //Si existe nombre, buscarlo
      groups = await groupByName(name);
      return res.status(200).json(groups);
    } else {
      //Si no se manda un nombre, buscar todos
      groups = await getGroups();
      return res.status(200).json(groups);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//Crear Grupo
router.post("/", async (req, res) => {
  try {
    const { name, released, principal_img, meaning, all_img, manager } =
      req.body;

    //Crearlo
    const newGroup = await createGroupDB(
      name,
      principal_img,
      meaning,
      released,
      all_img,
      manager
    );

    //Retornarlo
    res.status(200).json(newGroup);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// router.update("/", async (req, res) => {
//   try {
//     const { name, released, principal_img, meaning, all_img, manager } =
//       req.body;

//     //Crearlo
//     const updatedGroup = await updateGroupDB(
//       name,
//       principal_img,
//       meaning,
//       released,
//       all_img,
//       manager
//     );

//     //Retornarlo
//     res.status(200).json(updatedGroup);
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;
