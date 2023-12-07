import {Box, SxProps, Theme, Typography} from "@mui/material";
import {Collection} from "../../../../types/Collection";
import CustomButton from "../custom-button/CustomButton";

import * as sxStyles from './CollectionCard.style';
import {FC} from "react";
import Link from "next/link";
import {VisibilityOutlined} from "@mui/icons-material";
import mergeSx from "../../../../lib/utils/MergeSxStylesUtil";

interface CollectionCardProps {
  collection: Collection,
  myCollection?: boolean,
  sx?: SxProps<Theme>,
}

const CollectionCard: FC<CollectionCardProps> =
  ({
     collection,
     myCollection = false,
     sx = {},
  }) => {
  return (
    <Box sx={mergeSx(sxStyles.cardContainer, sx)}>
      <img
        src={collection.preview_image_url}
        alt={collection.name}
        style={{width: '100%', height: 'auto', borderRadius: '10px'}}
      />
      <Typography sx={sxStyles.label}>Collection "{collection.name}"</Typography>
      <Typography sx={sxStyles.otherProps}>Author: {collection.author_name}</Typography>
      {myCollection &&
        <Box sx={sxStyles.otherProps}>
          <Box>{collection.on_sale ? 'On sale' : 'Private'}</Box>
          {collection.views &&
            <Box sx={sxStyles.viewsBlock}>{collection.views}<VisibilityOutlined sx={sxStyles.viewsIcon}/></Box>
          }
        </Box>
      }
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
