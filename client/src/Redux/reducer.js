import {
  GET_ALL_GROUPS,
  // SEARCH_GROUP_BY_NAME,
  // GET_ALL_USERS,
  // CREATE_GROUP,
  // CREATE_USER,
  CLEAN_DETAIL,
  // ERROR,
} from "./actions";

//Config initialState
const initialState = {
  users: [],
  all_groups: [],
  cate_groups: [],
  iniciate_groups: [],
  family_groups: [],
  detail: [],
  error: false,
  errormsg: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GROUPS:
      return {
        ...state,
        all_groups: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
