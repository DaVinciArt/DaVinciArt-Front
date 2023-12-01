import {Box, Typography} from "@mui/material";
import {Collection} from "../../../../types/Collection";
import Image from "next/image";
import CustomButton from "../custom-button/CustomButton";

import * as sxStyles from './CollectionCard.style';
import {FC} from "react";

interface CollectionCardProps {
  collection: Collection,
}

const CollectionCard: FC<CollectionCardProps> = ({collection}) => {
  return (
    <Box sx={sxStyles.cardContainer}>
      <Image
        src={collection.previewImage}
        alt={collection.name}
        style={{width: '350px', height: 'auto', borderRadius: '10px'}}/>
      <Typography sx={sxStyles.label}>Collection "{collection.name}"</Typography>
      <Typography sx={sxStyles.otherProps}>Author: {collection.authorID}</Typography>
      <Typography sx={sxStyles.otherProps}>Creation date: {collection.creationDate}</Typography>
      <Typography sx={sxStyles.otherProps}>Price: {collection.price}</Typography>
      <Box sx={sxStyles.controlsContainer}>
        <CustomButton text={'View'} sx={{width: '100%'}}/>
        <CustomButton text={'Buy'} sx={{width: '100%'}}/>
      </Box>
    </Box>
  );
}

export default CollectionCard;
