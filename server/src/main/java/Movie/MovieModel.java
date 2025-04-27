package Movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "movies")    //for mongodb collection
@Data   //for all the boilerplate codes of getter setter initialized
@NoArgsConstructor //for creating constructor with no arguments ()
@AllArgsConstructor
public class MovieModel {
    @Id
    private ObjectId movieID;
    private String ImdbID;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;


}
