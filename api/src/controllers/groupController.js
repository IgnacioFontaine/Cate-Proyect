const Group = require("../models/Group");

//Obtener géneros
const getGroups = async () => {
  try {
    let groups = await Group.findAll();
    return groups;
  } catch (error) {
    throw new Error(error);
  }
};

//CAMBIAR A GROUPBYNAME()

// const videogameByName = async (name) => {
//   try {
//     let foundGame = [];
//     //Búsuqeda en la API
//     let api = await axios.get(
//       `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
//     );
//     api = api.data.results;
//     if (api.length) {
//       api = api.splice(0, 15);

//       api = api?.map((game) => {
//         return {
//           id: game.id,
//           name: game.name,
//           genres: game.genres?.map((gen) => gen.name),
//           platforms: game.platfoms?.map((plat) => plat.platform.name),
//           released: game.released,
//           img: game.background_image,
//           rating: game.rating,
//           description: game.description,
//         };
//       });
//     }
//     //Búsqueda en la DB
//     let results = await Videogame.findAll({
//       where: {
//         //Busca los nombres similares a lo enviado en "name"
//         name: { [Op.iLike]: `%${name}%` },
//       },
//       include: {
//         model: Genre,
//         attributes: ["name"],
//         through: {
//           attributes: [],
//         },
//       },
//     });
//     if (results.length) {
//       results = results.map((game) => {
//         return {
//           id: game.id,
//           name: game.name,
//           genres: game.genres?.map((gen) => gen.name),
//           platforms: game.platfoms,
//           released: game.released,
//           img: game.background_image,
//           rating: game.rating,
//           description: game.description,
//         };
//       });
//     }

//     foundGame = [...api, ...results];

//     //Si found Game no tiene nada, no encontró el juego
//     if (foundGame.length == 0)
//       throw new Error("No fue posible encontrar el Videojuego");
//     return foundGame;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

module.exports = {
  getGroups,
};
