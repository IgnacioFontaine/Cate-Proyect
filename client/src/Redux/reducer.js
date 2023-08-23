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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
