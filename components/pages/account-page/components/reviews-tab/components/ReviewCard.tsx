import {Box, Typography} from "@mui/material";
import {Review} from "../../../../../../types/Review";
import {FC} from "react";
import bin from "../../../../../../public/icons/bin.png";
import Image from "next/image";

import * as styles from './ReviewCard.styles'

interface ReviewCardProps {
  review: Review;
  userId: number;
}

const ReviewCard: FC<ReviewCardProps> = ({review, userId}) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.cardHeader}>
        <Box sx={{display: 'flex', gap: '20px'}}>
          <Typography sx={styles.authorUsername}>{review.author_username}</Typography>
          <Typography sx={styles.creationDate}>{review.creation_date}</Typography>
        </Box>
        {userId === review.receiver_id && (
          <Image
            src={bin}
            alt={"delete icon"}
            width={20}
            height={20}
          />
        )}
      </Box>
      <Typography sx={styles.reviewBody}>{review.review_body}</Typography>
    </Box>
  )
}

export default ReviewCard;
