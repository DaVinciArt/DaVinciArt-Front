"use client"

import {ColectionImage} from '../../types/ColectionImage'
import React, {FC, useState} from "react";
import {Box, Typography, useTheme} from "@mui/material";
import CustomButton from "../ui/custom-button/CustomButton";
import {ButtonVariant} from "../ui/custom-button/types";
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

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box sx={styles.container}>
      <CustomButton
        text={'Prev'}
        variant={ButtonVariant.CONTAINED}
        onClick={handleBack}
      />
      <img
        width={600}
        height={400}
        src={images[activeStep].url}
        alt={images[activeStep].label}
      />
      <Typography>{activeStep}</Typography>
      <CustomButton
        text={'Next'}
        variant={ButtonVariant.CONTAINED}
        onClick={handleNext}
      />
    </Box>
  );
};

export default Carousel;