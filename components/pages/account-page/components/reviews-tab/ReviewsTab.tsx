import {FC, useEffect, useState} from "react";
import {Review} from "../../../../../types/Review";
import {Box, Typography} from "@mui/material";
import ReviewCard from "../../../../common/ui/review-card/ReviewCard";

import * as styles from './ReviewsTab.styles'
import {deleteReview, getAllReview} from "../../../../../lib/api/api";

interface ReviewTabProps {
  userId: number
}

const ReviewsTab: FC<ReviewTabProps> = ({ userId}) => {
  const [isReviewArrayChanged, setIsReviewArrayChanged] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllReview(userId)
      setReviews(result)
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllReview(userId)
      setReviews(result)
    };

    if (isReviewArrayChanged) {
      fetchData();
    }
  }, [isReviewArrayChanged]);

  const handleDeleteReview = (reviewId: number) => {
    deleteReview(reviewId)
    setIsReviewArrayChanged(true)
    setTimeout(() => setIsReviewArrayChanged(false), 1000)
  }

  return (
    <Box sx={styles.reviewsConatiner}>
      <Typography sx={styles.reviewsHeader}>What do people say about you?</Typography>
      {(reviews.length !== 0) ?
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} userId={userId} handleDelete={handleDeleteReview}/>
        ))
        :
        <Typography sx={styles.noReviews}>No reviews yet</Typography>
      }
    </Box>
  )
}

export default ReviewsTab
