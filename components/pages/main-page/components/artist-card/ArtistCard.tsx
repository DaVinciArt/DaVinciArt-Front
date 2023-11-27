import {Box, Card, Typography} from "@mui/material";
import {FC} from "react";

import * as sxStyles from './ArtistCard.styles';
import styles from './ArtistCard.module.scss';

interface ArtistCardProps {
  image: string;
  name: string;
  arts: string[];
}

const ArtistCard: FC<ArtistCardProps> = ({image, name, arts}) => {
  return (
    <Card sx={sxStyles.artistCard}>
      <Box sx={sxStyles.imageContainer}>
        <img src={image} alt={name} className={styles['artistImage']}/>
      </Box>
      <Box sx={sxStyles.textContainer}>
        <Typography sx={sxStyles.artistName}>{name}</Typography>
        {arts && arts.map((art, index) => (
          <Typography key={index} sx={sxStyles.arts}>{art}</Typography>
        ))}
      </Box>
    </Card>
  );
};

export default ArtistCard;
