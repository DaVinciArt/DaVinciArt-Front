"use client"

import {ColectionImage} from '../../types/ColectionImage'
import React, {FC, useState} from "react";
import {Box, Typography} from "@mui/material";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";

import * as styles from './Carousel.styles'

interface CarouselProps {
  images: ColectionImage[],
}

const Carousel: FC<CarouselProps> = ({ images })=> {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    activeStep === images.length - 1 ?
      setActiveStep(0)
      :
      setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    activeStep === 0 ?
      setActiveStep(images.length - 1)
      :
      setActiveStep(activeStep - 1)
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.carouselControls}>
        <ArrowLeftCircleIcon onClick={handleBack}/>
      </Box>
      <Box sx={styles.collectionContainer}>
        <img
          src={images[activeStep].url}
          alt={images[activeStep].label}
          style={{width: '60vw', height: 'auto', borderRadius: '7px'}}
        />
        <Typography sx={styles.collectionHeading}>{images[activeStep].label}</Typography>
        <Typography sx={styles.collectionAuthor}>{images[activeStep].label}</Typography>
      </Box>
      <Box sx={styles.carouselControls}>
        <ArrowRightCircleIcon onClick={handleNext}/>
      </Box>
    </Box>
  );
};

export default Carousel;