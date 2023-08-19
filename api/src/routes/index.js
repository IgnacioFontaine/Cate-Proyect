const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const cateRouter = require("./cateRouter.js");

//Ruter:
const router = Router();

// Configurar los routers
router.use("/cate", cateRouter);

module.exports = router;
