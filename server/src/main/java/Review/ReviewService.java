package Review;

import User.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepo;

    public List<ReviewModel> findAllReviews(){
        return reviewRepo.findAll();
    }

    public List<ReviewModel> getReviewsByUser(UserModel user) {
        return reviewRepo.findByUser(user);
    }
}
