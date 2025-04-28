package User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userName}")
    public ResponseEntity<Optional<UserModel>> getUser(@PathVariable String userName){
        return new ResponseEntity<Optional<UserModel>>(userService.getUser(userName),HttpStatus.OK);
        //return new must
    }
}
