import {FC, useEffect, useState} from "react";
import * as styles from "./AuthorReviewsTab.styles";
import {Box, Typography} from "@mui/material";
import ReviewCard from "../../../../common/ui/review-card/ReviewCard";
import AddReviewForm from "./component/add-review-form/AddReviewForm";
import {addReview, deleteReview, getAllReview} from "../../../../../lib/api/api";
import {usePathname} from "next/navigation";

interface AuthorReviewsTabProps {
  userId: number
}

const AuthorReviewsTab: FC<AuthorReviewsTabProps> = ({ userId}) => {
  const [newReview, setNewReview] = useState('');
  const [isReviewArrayChanged, setIsReviewArrayChanged] = useState(false);
  const [showError, setShowError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const receiverId = +usePathname().split('/')[2]

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllReview(receiverId)
      setReviews(result)
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllReview(receiverId)
      setReviews(result)
    };

    if (isReviewArrayChanged) {
      fetchData();
    }
  }, [isReviewArrayChanged]);

  const handleReviewSubmit = () => {
    if (newReview !== '') {
      addReview(receiverId, userId, newReview)
      setNewReview('')
      setIsReviewArrayChanged(true)
      setTimeout(() => setIsReviewArrayChanged(false), 1000)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  const handleDeleteReview = (reviewId: number) => {
    deleteReview(reviewId)
    setIsReviewArrayChanged(true)
    setTimeout(() => setIsReviewArrayChanged(false), 1000)
  }

  return (
    <Box sx={styles.reviewsConatiner}>
      {(reviews.length !== 0) ?
        <Box>
          <AddReviewForm
            review={newReview}
            setReview={setNewReview}
            handleAddReview={handleReviewSubmit}
            showError={showError}
          />
          {reviews && reviews.map((review, index) => (
            <ReviewCard key={index} review={review} userId={userId} handleDelete={handleDeleteReview}/>
          ))}
        </Box>
        :
        <Box>
          <Typography sx={styles.noReviews}>No reviews yet. Become first!</Typography>
          <AddReviewForm
            review={newReview}
            setReview={setNewReview}
            handleAddReview={handleReviewSubmit}
            showError={showError}
          />
        </Box>
      }
    </Box>
  );
}

export default AuthorReviewsTab;