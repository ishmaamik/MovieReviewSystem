import { useEffect, useState } from "react"
import MovieDetails from "../components/MovieProfile/MovieDetails"
import MovieReviews from "../components/MovieProfile/MovieReviews"
import MovieBar from "../components/MovieProfile/MovieBar"
import styles from "../css/profile.module.css"
import { useParams } from "react-router-dom"
import { MovieProvider } from "../context/MovieContext"

const MovieProfile=()=>{
    const [isVisible, setIsVisible] = useState(false)
    const {movieURL}= useParams()

    useEffect(() => {
      // Set isVisible to true after the component has mounted to trigger the fade-in transition
      setIsVisible(true);
    }, []);
    return(
        <>
        <MovieProvider movieURL={movieURL}>
         <div className={`${styles.profile} ${isVisible ? styles.visible : ""}`}>
            <MovieBar/>
            <MovieDetails/>
            <MovieReviews/>
        </div>
        </MovieProvider>
        </>
    )
}

export default MovieProfile