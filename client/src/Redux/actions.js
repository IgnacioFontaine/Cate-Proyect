import axios from "axios";

//Generamos constantes para evitar errores de tipeo
export const GET_ALL_GROUPS = "GET_ALL_GROUPS";
export const SEARCH_GROUP_BY_NAME = "SEARCH_GROUP_BY_NAME";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_USER = "CREATE_USER";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
// export const SEARCH_GROUP_BY_STATUS = "SEARCH_GROUP_BY_STATUS";
export const SEARCH_CATE_GROUPS = "SEARCH_CATE_GROUPS";
export const SEARCH_INICIATE_GROUPS = "SEARCH_INICIATE_GROUPS";
export const SEARCH_FAMILIA_GROUPS = "SEARCH_FAMILIA_GROUPS";
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

// export const searchGroupByStatus = (status) => async (dispatch) => {
//   try {
//     let result = await axios.get(`http://localhost:3001/group?status=${status}`);
//     return dispatch({ type: SEARCH_GROUP_BY_STATUS, payload: result.data });
//   } catch (error) {
//     return dispatch({ type: ERROR, payload: error });
//   }
// };

export const searchCateGroups = () => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:3001/groups?status=Cate`);
    return dispatch({ type: SEARCH_CATE_GROUPS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const searchIniciateGroups = () => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:3001/group?status=Iniciate`);
    return dispatch({ type: SEARCH_INICIATE_GROUPS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const searchFamiliaGroups = () => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:3001/group?status=Familia`);
    return dispatch({ type: SEARCH_FAMILIA_GROUPS, payload: result.data });
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
