package Review;

import User.UserModel;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<ReviewModel, ObjectId> {

    List<ReviewModel> findByUser(UserModel user);  // Find all reviews by a specific user
}
