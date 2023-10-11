//Router de Cate
const { Router } = require("express");
const {
  patrullerosPorGrupo,
  traerPatrulleros,
  crearPatrulleroDB,
  modificarPatrullero,
  eliminarPatrullero,
} = require("../controllers/patrulleroController");

const router = Router();

//Obtener Grupos
router.get("/", async (req, res) => {
  try {
    
    const { grupo } = req.query;

    let patrulleros;
    if (grupo) {
      //Si existe grupo, buscarlo
      patrulleros = await patrullerosPorGrupo(grupo);
      return res.status(200).json(patrulleros);

    } else {
      //Si no se manda un grupo, buscar todos
      patrulleros = await traerPatrulleros();
      if (patrulleros.length === 0) {
        return res.status(200).send("No se encontro patrulleros");
      }
      return res.status(200).json(patrulleros);
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
      cuotas
    } = req.body;

    //Crearlo
    const nuevoPatrullero = await crearPatrulleroDB(
      name,
      cuotas
    );
    //Retornarlo
    res.status(200).json(nuevoPatrullero);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/modificar/:id", async (req, res) => {
  const { id } = req.params;
  
    const { name, cuotas } = req.body;
    try {
        if (!id) return res.status(404).json({ error: 'Id no encontrado' });
        
        const putGroup = await modificarPatrullero(id, name, cuotas);
        return res.status(200).json(putGroup);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.delete("/eliminar/:id",async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ error: "Invalido id" });
    await eliminarPatrullero(id);
    return res.status(200).json({ message: "Patrullero eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})



module.exports = router;