//Router de Cate
const { Router } = require("express");
const { getUsers, createUserDB } = require("../controllers/userController");
// const { Group } = require("../db");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    const { name } = req.params;
    let user;
    //Si no se manda un nombre, buscar todos
    user = await getUserByName(name);
    if (user.length === 0) {
      return res.status(200).send("No se encontraron Usuarios");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//Crear Usuario
router.post("/", async (req, res) => {
  try {
    const { name, password, email, released, gender, icon, status } = req.body;

    //Crearlo
    const newUser = await createUserDB(
      name,
      password,
      email,
      released,
      gender,
      icon,
      status
    );

    //Retornarlo
    res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
