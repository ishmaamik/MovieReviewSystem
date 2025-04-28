package Review;

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
}
