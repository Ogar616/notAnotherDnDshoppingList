const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_INFO_DIALOG":
      let index;
      action.index === undefined ? (index = 0) : (index = action.index);
      return {
        ...state,
        openInfo: state.openInfo ? false : true,
        activeInfo: index
      };
    case "SHOW_ADD_DIALOG":
      return { ...state, openAdd: state.openAdd ? false : true };
    case "ADD_ITEM":
      return { ...state, list: [...state.list, action.newItem] };
    case "DELETE_ITEM":
      const newList = [
        ...state.list.slice(0, action.index),
        ...state.list.slice(action.index + 1)
      ];
      return {
        ...state,
        list: newList
      };
    case "PRODS_ARRIVED":
      console.log("PRODS_ARRIVED", action.prods);
      return { ...state, list: action.prods };
    case "HANDLE_CHECK":
      return { ...state, checked: action.newChecked };
    case "GET_LIST":
    let listt;
    

      return { ...state, list: fetch("/store/", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(store => {
          return store.list;
        }) };

      
    default:
      return state;
  }
};

export default reducer;
