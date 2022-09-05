export default (state, action) => {
  switch (action.type) {
    case "ADD_FILM_TO_FAVOURITES":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };
    default:
      return state;
  }
};
