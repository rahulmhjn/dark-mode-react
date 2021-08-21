import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { initialState } from "../constants/themeState";
import { themeReducers } from "../reducers/themeReducers";

export default function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducers, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
