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
