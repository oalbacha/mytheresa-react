import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import styles from "./FavouriteList.module.scss";

const FavouriteList = () => {
  const { favourites } = useContext(GlobalContext) || [];
  return (
    <main className={styles.favs}>
      <h1 className={styles.favs__title}>My favourite List</h1>
      {favourites && (
        <ul className={styles.favs__list}>
          {favourites.map((film) => (
            <li className={styles.fav}>
              <figure className={styles.fav__figure}>
                <picture className={styles.fav__imgWrapper}>
                  <img
                    className={styles.fav__img}
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
                  />
                </picture>
                <figcaption className={styles.fav__figCap} style={{ flex: 1 }}>
                  <h4 className={styles.fav__title}>{film.title}</h4>
                  <p className={styles.fav__date}>
                    {film.release_date.substring(0, 4)}
                  </p>
                  <p className={styles.fav__desc}>{film.overview}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default FavouriteList;
