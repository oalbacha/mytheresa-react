import fetch from "isomorphic-fetch";

export function fetchAllFilms() {
  const upcomingFilms = fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=8957eb0a50e2033e2e1b439fa2ce08b2&language=en-US&page=1"
  ).then((res) => res.json());

  const nowPlayingFilms = fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=8957eb0a50e2033e2e1b439fa2ce08b2&language=en-US&page=1"
  ).then((res) => res.json());

  const popularFilms = fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8957eb0a50e2033e2e1b439fa2ce08b2&language=en-US&page=1"
  ).then((res) => res.json());

  return Promise.all([upcomingFilms, nowPlayingFilms, popularFilms])
    .then((filmData) => filmData)
    .catch((error) => console.error);
}

export function fetchFilm(id = "756999") {
  const encodedURI = encodeURI(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8957eb0a50e2033e2e1b439fa2ce08b2&language=en-US`
  );

  return fetch(encodedURI)
    .then((data) => data.json().then((film) => film))
    .catch((error) => {
      console.error(error);
      return null;
    });
}

const favs = [];
export function addToFavs(film) {
  favs.push(film);
}
