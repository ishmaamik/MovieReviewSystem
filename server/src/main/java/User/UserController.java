package User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userName}")
    public ResponseEntity<UserModel> getUser(@PathVariable String userName){
        return new ResponseEntity<UserModel>(userService.getUser(userName),HttpStatus.OK);
        //return new must
    }

    @PutMapping("/{userName}")
    public ResponseEntity<?> putUser(@PathVariable String userName, @RequestBody UserModel User){
       UserModel userInDb= userService.getUser(userName);

       userInDb.setUserName(User.getUserName());
       userInDb.setEmail(User.getEmail());
       userInDb.setFavoriteActor(User.getFavoriteActor());
       userInDb.setFavoriteActress(User.getFavoriteActress());
       userInDb.setFavoriteGenre(User.getFavoriteGenre());
       userInDb.setFavoriteMovie(User.getFavoriteMovie());
// Save updated user back to the database
        userService.saveUser(userInDb);
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
