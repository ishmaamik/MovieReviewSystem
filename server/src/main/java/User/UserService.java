package User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public UserModel getUser(String userName){
        return userRepo.findUserByUserName(userName);
    }
    public void saveUser(UserModel user) {
        userRepo.save(user); // Save the updated user back to the database
    }

}
