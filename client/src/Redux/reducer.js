import {
  GET_ALL_GROUPS,
  SEARCH_CATE_GROUPS,
  SEARCH_INICIATE_GROUPS,
  SEARCH_FAMILIA_GROUPS,
  CREATE_GROUP,
  // SEARCH_GROUP_BY_STATUS,
  // SEARCH_GROUP_BY_NAME,
  // GET_ALL_USERS,
  // CREATE_USER,
  CLEAN_DETAIL,
  ERROR,
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
    case SEARCH_CATE_GROUPS:
      return {
        ...state,
        cate_groups: action.payload,
      };
    case SEARCH_INICIATE_GROUPS:
      return {
        ...state,
        iniciate_groups: action.payload,
      };
    case SEARCH_FAMILIA_GROUPS:
      return {
        ...state,
        family_groups: action.payload,
      };
    case CREATE_GROUP:
      if (action.payload.status === 200) {
        return {
          ...state,
          errormsg: {},
        };
      } else {
        return {
          ...state,
          errormsg: action.payload,
        };
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
