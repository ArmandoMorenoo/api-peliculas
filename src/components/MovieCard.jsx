import styles from "../css/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const urlImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className={styles.movie__card}>
      <Link to={"/movies/" + movie.id}>
        <img src={urlImage} alt={movie.title} className={styles.image__movie} width={230} height={345} />
        <br />
        <h4>{movie.title}</h4>
      </Link>
    </div>
  );
}