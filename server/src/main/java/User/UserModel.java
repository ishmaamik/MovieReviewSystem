package User;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    @Id
    private ObjectId userId;
    private String userName;
    private String password;
    private List<String> watchList;
    private List<String> favoriteList;
    private String favoriteActor;
    private String favoriteActress;
    private String favoriteMovie;
    private String favoriteGenre;
    private String email;

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
    public List<String> getWatchList() {
        return watchList;
    }

    public void setWatchList(List<String> watchList) {
        this.watchList = watchList;
    }

    // Getter and Setter for favoriteList
    public List<String> getFavoriteList() {
        return favoriteList;
    }

    public void setFavoriteList(List<String> favoriteList) {
        this.favoriteList = favoriteList;
    }
}
