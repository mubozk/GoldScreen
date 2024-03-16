const appInitialState = {
  loading: false,
  theme: "light",
};
const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export { appReducer, appInitialState };
