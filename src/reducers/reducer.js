const reducer = (state, action) => {
  switch (action.type) {
    case "INFO_DIALOG":
      let index;
      action.index === undefined ? (index = 0) : (index = action.index);
      return {
        ...state,
        openInfo: state.openInfo ? false : true,
        activeInfo: index
      };
    case "ADD_DIALOG":
      return { ...state, openAdd: state.openAdd ? false : true };
    case "ADD_ITEM":
      console.log("ADD_ITEM in reducer fired");
      return { ...state, list: [...state.list, action.newItem] };
    case "HANDLE_CHECK":
      console.log("CHECK");
      return { ...state, checked: action.newChecked };
    default:
      return state;
  }
};

export default reducer;
