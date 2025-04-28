package Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "*")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<MovieModel>> getAllMovies(){
        return new ResponseEntity<List<MovieModel>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<MovieModel>> getOneMovie(@PathVariable String imdbId){
        return new ResponseEntity<Optional<MovieModel>>(movieService.findOneMovie(imdbId), HttpStatus.OK);
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<Optional<MovieModel>> getMovieByTitle(@PathVariable String title){
        return new ResponseEntity<Optional<MovieModel>>(movieService.findMovieByTitle(title), HttpStatus.OK);
    }
}
