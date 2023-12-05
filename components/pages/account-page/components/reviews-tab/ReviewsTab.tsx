import { FC } from "react";
import {Review} from "../../../../../types/Review";
import {Box, Typography} from "@mui/material";
import ReviewCard from "./components/ReviewCard";

import * as styles from './ReviewsTab.styles'

interface ReviewTabProps {
  reviews: Review[]
  userId: number
}

const ReviewsTab: FC<ReviewTabProps> = ({reviews, userId}) => {
  return (
    <Box sx={styles.reviewsConatiner}>
      <Typography sx={styles.reviewsHeader}>What do people say about you?</Typography>
      {(reviews.length !== 0) ?
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} userId={userId}/>
        ))
        :
        <Typography sx={styles.noReviews}>No reviews yet</Typography>
      }
    </Box>
  )
}

export default ReviewsTab
