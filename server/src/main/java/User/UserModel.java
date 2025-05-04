package User;

import Movie.MovieModel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
import java.util.Optional;

@Document(collection = "users")
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    @Id
    private ObjectId userId;
    private String userName;
    private String password;
    @DocumentReference
    private List<MovieModel> watchList;
    @DocumentReference
    private List<MovieModel> favoriteList;
    private String favoriteActor;
    private String favoriteActress;
    private String favoriteMovie;
    private String favoriteGenre;
    private String email;
    private List<String> roles;

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    private String image;

    public String getFavoriteActor() {
        return favoriteActor;
    }

    public void setFavoriteActor(String favoriteActor) {
        this.favoriteActor = favoriteActor;
    }

    public String getFavoriteActress() {
        return favoriteActress;
    }

    public void setFavoriteActress(String favoriteActress) {
        this.favoriteActress = favoriteActress;
    }

    public String getFavoriteMovie() {
        return favoriteMovie;
    }

    public void setFavoriteMovie(String favoriteMovie) {
        this.favoriteMovie = favoriteMovie;
    }

    public String getFavoriteGenre() {
        return favoriteGenre;
    }

    public void setFavoriteGenre(String favoriteGenre) {
        this.favoriteGenre = favoriteGenre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ObjectId getUserId() {
        return userId;
    }

    public void setUserId(ObjectId userId) {
        this.userId = userId;
    }

    // Getter and Setter for userName
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    // Getter and Setter for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Getter and Setter for watchList
    public List<MovieModel> getWatchList() {
        return watchList;
    }

    public void setWatchList(List<MovieModel> watchList) {
        this.watchList = watchList;
    }

    public void addWatchList(MovieModel movie) {
        watchList.add(movie);
    }

    // Getter and Setter for favoriteList
    public List<MovieModel> getFavoriteList() {
        return favoriteList;
    }

    public void setFavoriteList(List<MovieModel> favoriteList) {
        this.favoriteList = favoriteList;
    }
}
