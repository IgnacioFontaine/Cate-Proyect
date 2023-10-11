const { Router } = require("express");

const groupsRouter = require("./groupsRouter.js");
const usersRouter = require("./usersRouter.js");
const patrulleroRouter = require("./patrulleroRouter.js")

//Ruter:
const router = Router();

// Configurar los routers
router.use("/groups", groupsRouter);
router.use("/users", usersRouter);
router.use("/patrullero", patrulleroRouter);

module.exports = router;
