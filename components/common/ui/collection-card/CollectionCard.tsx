import {Box, Typography} from "@mui/material";
import {Collection} from "../../../../types/Collection";
import CustomButton from "../custom-button/CustomButton";

import * as sxStyles from './CollectionCard.style';
import {FC} from "react";
import Link from "next/link";

interface CollectionCardProps {
  collection: Collection,
}

const CollectionCard: FC<CollectionCardProps> = ({collection}) => {
  return (
    <Box sx={sxStyles.cardContainer}>
      <img
        src={collection.preview_image_url}
        alt={collection.name}
        style={{width: '350px', height: 'auto', borderRadius: '10px'}}
      />
      <Typography sx={sxStyles.label}>Collection "{collection.name}"</Typography>
      <Typography sx={sxStyles.otherProps}>Author: {collection.author_name}</Typography>
      <Typography sx={sxStyles.otherProps}>Creation date: {collection.upload_date}</Typography>
      <Typography sx={sxStyles.otherProps}>Price: {collection.price}</Typography>
      <Box sx={sxStyles.controlsContainer}>
        <Link href={`/user/${collection.author_id}/collection/${collection.id}`} style={{width: '100%'}}>
          <CustomButton text={'View'} sx={{width: '100%'}}/>
        </Link>
      </Box>
    </Box>
  );
}

export default CollectionCard;
