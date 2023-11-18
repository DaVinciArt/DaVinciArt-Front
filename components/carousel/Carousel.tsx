"use client"

import { ColectionImage } from '../../types/ColectionImage'
import React, {FC, useState} from "react";
import {Box, Button, MobileStepper, useTheme} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CustomButton from "../ui/custom-button/CustomButton";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";

interface CarouselProps {
  images: ColectionImage[],
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel: FC<CarouselProps> = ({ images })=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box sx={{maxWidth: '600px'}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                width={600}
                height={400}
                src='https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{backgroundColor: 'black', color: 'white'}}
          >
            {theme.direction === 'rtl' ? (
              <CustomButton icon={<Box>{ArrowRightCircleIcon}</Box>}>Next</CustomButton>
            ) : (
              <CustomButton icon={<Box>{ArrowRightCircleIcon}</Box>}>Next</CustomButton>
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{backgroundColor: 'black', color: 'white'}}
          >
            {theme.direction === 'rtl' ? (
              <CustomButton icon={<Box>ArrowLeftCircleIcon</Box>}>Back</CustomButton>
            ) : (
              <CustomButton icon={<Box>ArrowLeftCircleIcon</Box>}>Back</CustomButton>
            )}
          </Button>
        }
      />
    </Box>
  );
};

export default Carousel;