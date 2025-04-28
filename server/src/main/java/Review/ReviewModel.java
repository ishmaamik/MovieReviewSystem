package Review;

import User.UserModel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Document(collection = "reviews")
@NoArgsConstructor
@AllArgsConstructor
public class ReviewModel {
    @Id
    private ObjectId reviewId;

    @DocumentReference
    private UserModel user;

    private String review;

    private LocalDateTime created;

    private LocalDateTime updated;

    public ObjectId getReviewId() {
        return reviewId;
    }

    public void setReviewId(ObjectId reviewId) {
        this.reviewId = reviewId;
    }

    // Getter and Setter for review
    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    // Getter and Setter for created
    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    // Getter and Setter for updated
    public LocalDateTime getUpdated() {
        return updated;
    }

    public void setUpdated(LocalDateTime updated) {
        this.updated = updated;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }
}
