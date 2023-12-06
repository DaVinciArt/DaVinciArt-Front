"use client"

import React, {FC} from "react";
import {Box, Typography} from "@mui/material";
import Carousel from "nuka-carousel";
import Image from "next/image";

import * as sxStyles from './CustomCarousel.styles';
import styles from './CustomCarousel.module.scss';
import {
  renderBottomCenterControl,
  renderCenterLeftControl,
  renderCenterRightControl
} from './components/controls/controls';
import {Collection} from "../../../../types/Collection";
import Link from "next/link";

interface CarouselProps {
  collections: Collection[],
}

const CustomCarousel: FC<CarouselProps> = ({ collections })=> {

  return (
    <Carousel
      adaptiveHeight
      wrapAround
      autoplay
      autoplayInterval={4000}
      className={styles['carousel']}
      renderCenterLeftControls={renderCenterLeftControl}
      renderBottomCenterControls={renderBottomCenterControl}
      renderCenterRightControls={renderCenterRightControl}
    >
      {collections && collections.map((collection, index) => (
        <Link key={index} href={`/user/${collection.author_id}/collection/${collection.id}`}>
          <Box sx={sxStyles.collectionContainer}>
            <img src={collection.preview_image_url} alt={collection.name} className={styles['image']}/>
            <Typography sx={sxStyles.collectionHeading}>Collection "{collection.name}"</Typography>
            <Typography sx={sxStyles.collectionAuthor}>Author: {collection.author_name}</Typography>
          </Box>
        </Link>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
