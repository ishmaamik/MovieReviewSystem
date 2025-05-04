package Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<MovieModel> allMovies(){
        return movieRepository.findAll();   //described inside the repository class for mongodb
    }

    public Optional<MovieModel> findOneMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }

    public MovieModel findMovieByTitle(String title){
        return movieRepository.findMovieByTitle(title);
    }


}
