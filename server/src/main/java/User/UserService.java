package User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    private PasswordEncoder encoder= new BCryptPasswordEncoder();

    public UserModel getUser(String userName){
        return userRepo.findUserByUserName(userName);
    }

    public void saveUser(UserModel user) {
        String encodedPassword= encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepo.save(user); // Save the updated user back to the database
    }

}
