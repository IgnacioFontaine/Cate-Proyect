import axios from "axios";

//Generamos constantes para evitar errores de tipeo
export const GET_ALL_GROUPS = "GET_ALL_GROUPS";
export const SEARCH_GROUP_BY_NAME = "SEARCH_GROUP_BY_NAME";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_USER = "CREATE_USER";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const ERROR = "ERROR";

//Actions:
export const getAllGroups = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/groups");
    return dispatch({ type: GET_ALL_GROUPS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const searchGroupByName = (name) => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:3001/group?name=${name}`);
    return dispatch({ type: SEARCH_GROUP_BY_NAME, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const createGroup = (group) => async (dispatch) => {
  const newGroup = await axios.post("http://localhost:3001/group", group);
  return dispatch({ type: CREATE_GROUP, payload: newGroup.data });
};

export const createUser = (user) => async (dispatch) => {
  const newUser = await axios.post("http://localhost:3001/user", user);
  return dispatch({ type: CREATE_USER, payload: newUser.data });
};

export const cleanDetail = () => (dispatch) => {
  return dispatch({ type: CLEAN_DETAIL });
};
