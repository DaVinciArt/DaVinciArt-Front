"use client"

import {ColectionImage} from '../../../types/ColectionImage'
import React, {FC} from "react";
import {Box, Typography} from "@mui/material";
import Carousel from "nuka-carousel";
import Image from "next/image";

import * as sxStyles from './CustomCarousel.styles'
import styles from './CustomCarousel.module.scss'
import {
  renderBottomCenterControl,
  renderCenterLeftControl,
  renderCenterRightControl
} from './components/controls/controls';

interface CarouselProps {
  images: ColectionImage[],
}

const CustomCarousel: FC<CarouselProps> = ({ images })=> {

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
      {images && images.map((image, index) => (
        <Box key={index} sx={sxStyles.collectionContainer}>
          <Image src={image.url} alt={image.label} className={styles['image']}/>
          <Typography sx={sxStyles.collectionHeading}>Collection "{image.label}"</Typography>
          <Typography sx={sxStyles.collectionAuthor}>Author: {image.author}</Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
