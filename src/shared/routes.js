import Home from "./Home";
import Film from "./Film";
import { fetchFilm, fetchAllFilms } from "./api";
import Container from "./Container";
import FavouriteList from "./FavouriteList";

const routes = [
  {
    path: "/",
    component: Container,
    fetchInitialData: () => fetchAllFilms(),
  },
  {
    path: "/favourites",
    component: FavouriteList,
  },
  {
    path: "/:type/:id",
    component: Film,
    fetchInitialData: (path = "") => fetchFilm(path.split("/").pop()),
  },
];

export default routes;
