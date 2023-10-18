import ACTION_TYPES from './actionTypes'

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
    case ACTION_TYPES.GET_ALL_GROUPS:
      return {
        ...state,
        all_groups: action.payload,
      };
    case ACTION_TYPES.SEARCH_CATE_GROUPS:
      return {
        ...state,
        cate_groups: action.payload,
      };
    case ACTION_TYPES.SEARCH_INICIATE_GROUPS:
      return {
        ...state,
        iniciate_groups: action.payload,
      };
    case ACTION_TYPES.SEARCH_FAMILIA_GROUPS:
      return {
        ...state,
        family_groups: action.payload,
      };
    case ACTION_TYPES.CREATE_GROUP:
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
    case ACTION_TYPES.UPDATE_GROUP_SUCCESS:
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
    
    case ACTION_TYPES.UPDATE_GROUP_FAILURE:
      return state;
    
    case ACTION_TYPES.DELETE_GROUP_SUCCESS:
      return {
        ...state, all_groups: state.all_groups.filter(all_groups => all_groups.id !== action.payload)
      };
    
    case ACTION_TYPES.DELETE_GROUP_FAILURE:
      return state;
    
    case ACTION_TYPES.GET_ALL_PATRULLEROS:
      return {
        ...state,
        all_patrulleros: action.payload,
      };
    
    case ACTION_TYPES.CREAR_PATRULLERO:
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
    
    case ACTION_TYPES.MODIFICAR_PATRULLERO_EXITO:
      state.all_patrulleros.forEach((patrullero)=>{
                if(patrullero.id === action.payload.id){
                    patrullero.name = action.payload.name
                    patrullero.cuotas = action.payload.cuotas
                    patrullero.grupo = action.payload.grupo
                }
            })
        return {
            ...state,
            all_patrulleros: [...state.all_patrulleros]
        };
    
    case ACTION_TYPES.MODIFICAR_PATRULLERO_FRACASO:
      return state;

    case ACTION_TYPES.ELIMINAR_PATRULLERO_EXITO:
      return {
        ...state, all_patrulleros: state.all_patrulleros.filter(all_patrulleros => all_patrulleros.id !== action.payload)
      };
    
    case ACTION_TYPES.ELIMINAR_PATRULLERO_FRACASO:
      return state;

    case ACTION_TYPES.CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case ACTION_TYPES.ERROR:
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
