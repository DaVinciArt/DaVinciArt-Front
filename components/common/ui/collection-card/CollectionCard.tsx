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
      <Image src={collection.previewImage} alt={collection.label} style={{width: '300px', height: 'auto'}}/>
      <Typography sx={sxStyles.label}>Collection "{collection.label}"</Typography>
      <Typography sx={sxStyles.otherProps}>Author: {collection.authorID}</Typography>
      <Typography sx={sxStyles.otherProps}>Creation date: {collection.creationDate}</Typography>
      <Typography sx={sxStyles.otherProps}>Price: {collection.price}</Typography>
      <Box sx={sxStyles.controlsContainer}>
        <CustomButton text={'View'}/>
        <CustomButton text={'Edit'}/>
        <CustomButton text={'Buy'}/>
      </Box>
    </Box>
  );
}

export default CollectionCard;
