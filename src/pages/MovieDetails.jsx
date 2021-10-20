import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "../css/MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const urlImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={`${styles.details__container}`}>
      <img
        src={urlImage}
        alt={movie.title}
        className={`${styles.col} ${styles.img}`}
      />
      <div className={`${styles.col} ${styles.detalles}`}>
        <h5 className={`${styles.titulo}`}>
          <b>Título:</b> {movie.original_title}
        </h5>
        <p>
          <b>Fecha de estreno:</b> {movie.release_date}
        </p>{" "}
        <br />
        <p>
          <b>Género:</b> {movie.genres.map((genre) => genre.name).join(", ")}
        </p>{" "}
        <br />
        <p>
          <b>Descripción:</b> {movie.overview}
        </p>
      </div>
    </div>
  );
}
