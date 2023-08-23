//Config initialState
const initialState = {
  users: [],
  all_groups: [],
  sort_groups: [],
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
