import { useContext } from "react";
import styles from "../../css/moviedetail.module.css";
import { MovieContext } from "../../context/MovieContext";

const MovieDetails = () => {
  const { movie } = useContext(MovieContext);

  const list = [
    { "Trailer": <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a> },
    { "Genres": movie.genres?.join(", ") },
    { 
        "Backdrops": 
          <div className={styles["contained"]}>
            {movie.backdrops?.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Backdrop ${index + 1}`} 
                className={styles["backdrop-image"]} 
              />
            ))}
          </div>
      },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["details-list"]}>
        {list.map((p, index) => {
          const [key, value] = Object.entries(p)[0];
          return (
            <div key={index} className={styles["details-item"]}>
              <span className={styles["details"]}>{key}:</span>
              <span className={styles["fields"]}>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetails;
