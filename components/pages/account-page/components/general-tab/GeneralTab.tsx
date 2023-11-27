'use client';

import {Avatar, Box, Typography} from "@mui/material";
import Image from "next/image";
import {VisibilityOutlined} from "@mui/icons-material";
import pesPatron from '../../../../../public/icons/dog.png';
import {useState} from "react";

import * as styles from './GeneralTab.styles'
import {ColectionImage} from "../../../../../types/ColectionImage";
import hands from "../../../../../public/images/hands.jpeg";
import trees from "../../../../../public/images/olive-trees.jpeg";
import queen from "../../../../../public/images/queen.jpeg";
import {Collection, CollectionStatus} from "../../../../../types/Collection";
import CollectionCard from "../../../../common/ui/collection-card/CollectionCard";

const GeneralTab = () => {

  let collections: Collection[] = [
    {
      label: 'Hands',
      authorID: 0,
      previewImage: hands,
      creationDate: 0,
      price: 1,
      status: CollectionStatus.FOR_SALE
    },
    {
      label: 'Hands',
      authorID: 0,
      previewImage: hands,
      creationDate: 0,
      price: 1,
      status: CollectionStatus.FOR_SALE
    },
    {
      label: 'Hands',
      authorID: 0,
      previewImage: hands,
      creationDate: 0,
      price: 1,
      status: CollectionStatus.FOR_SALE
    },
  ]

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box>
      <Box sx={styles.userInformationContainer}>
        <Avatar {...stringAvatar('Kent Dodds')} sx={styles.avatar}/>
        <Box sx={styles.textInformation}>
          <Typography sx={styles.username}>Yablonya</Typography>
          <Box sx={styles.textBox}>
            <Typography sx={styles.other}>Danylo Yablonskyi</Typography>
            <Typography sx={styles.other}>
              <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginRight: '7px'}}/>
              300 PatronCoins
            </Typography>
            <Typography sx={styles.other}>dnlablonskyi@gmail.com</Typography>
            <Typography sx={styles.other}>
              <VisibilityOutlined sx={{width: '20px', mr: '7px'}}/>
              19 views
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={styles.collectionsHeader}>Yor collections</Typography>
        <Box sx={styles.collectionsContainer}>
          {collections ?
            (
              collections.map((collection, index) => (
                <CollectionCard collection={collection}/>
              ))
            )
            :
            <Typography sx={styles.noCollections}>You have no collections :(</Typography>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralTab;
