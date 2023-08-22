//Router de Cate
const { Router } = require("express");
const {
  getUserByName,
  createUserDB,
} = require("../controllers/userController");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let user;
    //Si no se manda un nombre, buscar todos
    user = await getUserByName(name);
    if (user === null) {
      return res.status(200).send("No se encontró el Usuario");
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
