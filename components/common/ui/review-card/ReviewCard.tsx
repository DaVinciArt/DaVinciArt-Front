import {Avatar, Box, Typography} from "@mui/material";
import {Review} from "../../../../types/Review";
import {FC} from "react";
import bin from "../../../../public/icons/bin.png";
import Image from "next/image";

import * as styles from './ReviewCard.styles'

interface ReviewCardProps {
  review: Review;
  userId: number;
  handleDelete: (reviewId: number) => void;
}

const ReviewCard: FC<ReviewCardProps> = ({review, userId, handleDelete}) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.cardHeader}>
        <Box sx={{display: 'flex', gap: '15px', alignItems: 'center'}}>
          <Avatar src={review.commentator.avatar} sx={styles.commentatorAvatar}/>
          <Typography sx={styles.authorUsername}>{review.commentator.username}</Typography>
          <Typography sx={styles.creationDate}>{review.upload_date}</Typography>
        </Box>
        {(userId === review.receiver_id || userId === +review.commentator_id) && (
          <Image
            src={bin}
            alt={"delete icon"}
            width={20}
            height={20}
            onClick={() => handleDelete(review.id)}
          />
        )}
      </Box>
      <Typography sx={styles.reviewBody}>{review.comment_text}</Typography>
    </Box>
  )
}

export default ReviewCard;
