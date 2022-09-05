import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favourites:
    __isBrowser__ && localStorage.getItem("favourites")
      ? JSON.parse(localStorage.getItem("favourites"))
      : [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (__isBrowser__) {
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
      localStorage.setItem("theme", JSON.stringify(state.theme));
    }
  }, [state]);

  const addFilmToFavourites = (film) => {
    dispatch({ type: "ADD_FILM_TO_FAVOURITES", payload: film });
  };

  return (
    <GlobalContext.Provider
      value={{
        favourites: state.favourites,
        addFilmToFavourites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
