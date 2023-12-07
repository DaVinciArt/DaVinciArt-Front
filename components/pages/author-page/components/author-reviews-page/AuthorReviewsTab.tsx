import {Review} from "../../../../../types/Review";
import {FC, SetStateAction, useContext, useState} from "react";
import * as styles from "./AuthorReviewsTab.styles";
import {Box, Typography} from "@mui/material";
import ReviewCard from "../../../account-page/components/reviews-tab/components/ReviewCard";
import {UserContext} from "../../../../../lib/hooks/use-authentication/useAuthentication";
import AddReviewForm from "./component/add-review-form/AddReviewForm";

interface AuthorReviewsTabProps {
  reviews: Review[]
  userId: number
}

const AuthorReviewsTab: FC<AuthorReviewsTabProps> = ({reviews, userId}) => {
  const [newReview, setNewReview] = useState('');
  const [isReviewAdded, setIsReviewAdded] = useState(false)


  return (
    <Box sx={styles.reviewsConatiner}>
      {(reviews.length !== 0) ?
        <Box>
          <AddReviewForm
            review={newReview}
            setReview={setNewReview}
            setIsReviewAdded={setIsReviewAdded}
          />
          {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} userId={userId}/>
          ))}
        </Box>
        :
        <Box>
          <Typography sx={styles.noReviews}>No reviews yet. Become first!</Typography>
          <AddReviewForm
            review={newReview}
            setReview={setNewReview}
            setIsReviewAdded={setIsReviewAdded}
          />
        </Box>
      }
    </Box>
  );
}

export default AuthorReviewsTab;