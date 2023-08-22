const { User } = require("../db");

const createUserDB = async (
  name,
  password,
  email,
  released,
  gender,
  icon,
  status
) => {
  try {
    let newUser = User.create({
      name,
      password,
      email,
      released,
      gender,
      icon,
      status,
    });
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserByName = async (name) => {
  try {
    let user = await User.findOne({
      where: {
        name: name,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const validateLogin = async (user) => {
  try {
  } catch (error) {
    throw new Error(error);
  }
};

// const modifyUser = async (user) => {
//   try {
//     //modificar

//   } catch (error) {
//     throw new Error(error);
//   }
// }

module.exports = {
  createUserDB,
  getUserByName,
};
