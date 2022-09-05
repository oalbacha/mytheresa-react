import React, { useContext, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Film.module.scss";
import { GlobalContext } from "./context/GlobalState";

const themes = {
  first: {
    color: "hsl(210 15% 90%)",
    backgroundColor: "hsl(210 20% 10%)",
    fontFamily: "Avenir Black",
  },
  second: {
    color: "hsl(220 5% 65%)",
    backgroundColor: "hsl(207, 15%, 17%)",
    fontFamily: "Verdana",
  },
  third: {
    color: "hsl(230 5% 60%)",
    backgroundColor: "hsl(210, 15%, 20%)",
    fontFamily: "Courier",
  },
};

export default function FIlm({ fetchInitialData, data }) {
  const [film, setFilm] = useState(() => {
    return __isBrowser__ ? window.__INITIAL_DATA__ : data;
  });
  const [loading, setLoading] = useState(film ? false : true);
  const fetchNewFilm = React.useRef(film ? false : true);
  const { type, id } = useParams();

  useEffect(() => {
    if (fetchNewFilm.current === true) {
      setLoading(true);

      fetchInitialData(id).then((film) => {
        setFilm(film);
        setLoading(false);
      });
    } else {
      fetchNewFilm.current = true;
    }
  }, [id, fetchNewFilm]);

  const { favourites, addFilmToFavourites } = useContext(GlobalContext);
  const [favourite, setFavourite] = useState(false);
  useEffect(() => {
    if (!!favourites.find((f) => f.id === film.id)) {
      setFavourite(true);
    }
  }, []);

  const handleFavourite = (film) => {
    setFavourite(true);
    addFilmToFavourites(film);
  };

  if (loading === true) {
    return <i className="loading">🌀</i>;
  }

  return (
    <div
      style={
        type === "popular"
          ? themes.first
          : type === "now-playing"
          ? themes.second
          : type === "upcoming"
          ? themes.third
          : ""
      }
      className={styles.film}
    >
      <div className={styles.film__wrapper}>
        <div className={styles.film__poster_wrapper}>
          <img
            className={styles.film__poster}
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          />
        </div>
        <div>
          <div className={styles.film__header}>
            <h1>{film.title}</h1>

            {favourite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            ) : (
              <button
                className={styles.favourite_btn}
                onClick={() => handleFavourite(film)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            )}
          </div>
          {film.genres && (
            <div className={styles.genres}>
              {film.genres.map((g) => (
                <p key={g.id}>{g.name}</p>
              ))}
            </div>
          )}
          <h3>{film.tagline}</h3>
        </div>
      </div>
      <p className={styles.film__overview}>{film.overview}</p>
    </div>
  );
}
