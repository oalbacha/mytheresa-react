import React, { useState, useEffect, useRef } from "react";
import Carousel from "./Carousel";

const Container = ({ data }) => {
  const [films, setFilms] = useState(() => {
    return __isBrowser__ ? window.__INITIAL_DATA__ : data;
  });
  const [filmsUIData, setFilmsUIData] = useState([]);
  const [setLoading] = useState(films ? false : true);
  const fetchNewFilms = useRef(films ? false : true);

  useEffect(() => {
    if (fetchNewFilms.current === true) {
      setLoading(true);

      fetchInitialData().then((films) => {
        setFilms(films);
        setLoading(false);
      });
    } else {
      fetchNewFilms.current = true;
    }
  }, [fetchNewFilms]);

  useEffect(() => {
    if (films && films.length > 0) {
      setFilmsUIData([
        {
          title: "Popular",
          subtitle: "Current popular movies on TMDB",
          filmData: films[0].results,
          type: "popular",
        },
        {
          title: "Now Playing",
          subtitle: "A list of movies now playing in theatres",
          filmData: films[1].results,
          type: "now-playing",
        },
        {
          title: "Upcoming",
          subtitle: "Upcoming movies to theatres",
          filmData: films[2].results,
          type: "upcoming",
        },
      ]);
    }
  }, [films]);

  return (
    <div>
      {filmsUIData.map((C) => (
        <Carousel
          key={C.title}
          title={C.title}
          subtitle={C.subtitle}
          filmData={C.filmData}
          type={C.type}
        />
      ))}
    </div>
  );
};

export default Container;
