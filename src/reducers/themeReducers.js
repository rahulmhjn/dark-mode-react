export const themeReducers = (state, action) => {
  switch (action.type) {
    case "dark":
      return { dark: true };
    case "light":
      return { dark: false };
    default:
      return state;
  }
};
