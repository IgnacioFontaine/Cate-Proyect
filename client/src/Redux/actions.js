import axios from "axios";



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
    let result = await axios.get(`http://localhost:3001/groups?status=Iniciate`);
    return dispatch({ type: SEARCH_INICIATE_GROUPS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const searchFamiliaGroups = () => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:3001/groups?status=Familia`);
    return dispatch({ type: SEARCH_FAMILIA_GROUPS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const createGroup = (group) => async (dispatch) => {
  const newGroup = await axios.post("http://localhost:3001/groups", group);
  return dispatch({ type: CREATE_GROUP, payload: newGroup.data });
};

export const deleteGroup = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/groups/eliminar/${id}`);
      
      dispatch({
        type: DELETE_GROUP_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: DELETE_GROUP_FAILURE,
        payload: error.message
      });
    }
  };
};

export const updateGroup = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/groups/modificar/${id}`, updatedFields);

      dispatch({
        type: UPDATE_GROUP_SUCCESS,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: UPDATE_GROUP_FAILURE,
        payload: error.message
      });
    }
  };
};

export const createUser = (user) => async (dispatch) => {
  const newUser = await axios.post("http://localhost:3001/user", user);
  return dispatch({ type: CREATE_USER, payload: newUser.data });
};

export const getUsers = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/users");
    return dispatch({ type: GET_ALL_USERS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const getPatrulleros = () => async (dispatch) => {
  try {
    let result = await axios.get("http://localhost:3001/patrulleros");
    return dispatch({ type: GET_ALL_PATRULLEROS, payload: result.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const crearPatrullero = (patrullero) => async (dispatch) => {
  const nuevoPatrullero = await axios.post("http://localhost:3001/patrulleros", patrullero);
  return dispatch({ type: CREAR_PATRULLERO, payload: nuevoPatrullero.data });
}

export const eliminarPatrullero = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/patrulleros/eliminar/${id}`);
      
      dispatch({
        type: ELIMINAR_PATRULLERO_EXITO,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ELIMINAR_PATRULLERO_FRACASO,
        payload: error.message
      });
    }
  };
};

export const modificarPatrullero = (id, updatedFields) => {
  return async (dispatch) => {
    try {

      await axios.put(`http://localhost:3001/patrulleros/modificar/${id}`, updatedFields);

      dispatch({
        type: MODIFICAR_PATRULLERO_EXITO,
        payload: updatedFields
      });
    } catch (error) {
      dispatch({
        type: MODIFICAR_PATRULLERO_FRACASO,
        payload: error.message
      });
    }
  };
};


export const cleanDetail = () => (dispatch) => {
  return dispatch({ type: CLEAN_DETAIL });
};
