const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const groupsRouter = require("./groupsRouter.js");
const usersRouter = require("./usersRouter.js");

//Ruter:
const router = Router();

// Configurar los routers
router.use("/groups", groupsRouter);
router.use("/users", usersRouter);

module.exports = router;
