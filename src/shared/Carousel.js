import React from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ filmData, subtitle, title, type }) => {
  return (
    <section className={styles.carousel__container}>
      <div className={styles.carousel__wrapper}>
        <header>
          <h2 className={styles.carousel__title}>{title}</h2>
          <h3 className={styles.carousel__subtitle}>{subtitle}</h3>
        </header>

        <div className={styles.carousel__horizontal_media_scroller}>
          {filmData &&
            filmData?.map((film) => (
              <a key={film.id} href={`/${type}/${film.id}`}>
                <figure className={styles.carousel__figure}>
                  <picture>
                    <img
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                    />
                  </picture>
                  <figcaption>{film.original_title}</figcaption>
                </figure>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
