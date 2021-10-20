import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
//* --- ESTILOS DE ESTE COMPONENTE --- *//
import styles from "../css/MoviesGrid.module.css";

import { get } from "../utils/httpClient";
//* --- COMPONENTE DEL LOADING --- *//
import { Spinner } from "./Spinner";
//* --- NUESTRO HOOKS --- *//
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  // console.log(search);

  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false)
    });
  }, [search]);

  if(isLoading){
    return(
      <Spinner />
    )
  }

  return (
    <div className={styles.movies__grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
