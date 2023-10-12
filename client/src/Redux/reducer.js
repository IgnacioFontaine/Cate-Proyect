import {
  GET_ALL_GROUPS,
  SEARCH_CATE_GROUPS,
  SEARCH_INICIATE_GROUPS,
  SEARCH_FAMILIA_GROUPS,
  CREATE_GROUP,
  DELETE_GROUP_FAILURE,
  DELETE_GROUP_SUCCESS,
  UPDATE_GROUP_FAILURE,
  UPDATE_GROUP_SUCCESS,
  CLEAN_DETAIL,
  ERROR,
    // SEARCH_GROUP_BY_STATUS,
  // SEARCH_GROUP_BY_NAME,
  // GET_ALL_USERS,
  // CREATE_USER,
} from "./actions";

//Config initialState
const initialState = {
  users: [],
  all_groups: [],
  cate_groups: [],
  iniciate_groups: [],
  family_groups: [],
  detail: [],
  all_patrulleros: [],
  patrulleros_por_grupo:[],
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
    case UPDATE_GROUP_SUCCESS:
      state.all_groups.forEach((group)=>{
                if(group.id === action.payload.id){
                    group.name = action.payload.name
                    group.meaning = action.payload.meaning
                    group.release_date = action.payload.release_date
                    group.manager = action.payload.manager
                    group.status = action.payload.status
                    group.acronym = action.payload.acronym
                }
            })
        return {
            ...state,
            all_groups: [...state.all_groups]
        };
    
    case UPDATE_GROUP_FAILURE:
      return state;
    
    case DELETE_GROUP_SUCCESS:
      return {
        ...state, all_groups: state.all_groups.filter(all_groups => all_groups.id !== action.payload)
      };
    case DELETE_GROUP_FAILURE:
      return state;
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
