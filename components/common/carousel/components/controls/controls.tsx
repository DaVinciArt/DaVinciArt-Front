import {Box} from "@mui/material";
import React from "react";
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/solid";
import styles from '../../CustomCarousel.module.scss'

export const renderCenterLeftControl = ({previousSlide}) => (
  <Box onClick={previousSlide}>
    <ArrowLeftCircleIcon className={styles['control']} style={{marginLeft: '10px'}}/>
  </Box>
);

export const renderBottomCenterControl = () => (
  <Box></Box>
);

export const renderCenterRightControl = ({nextSlide}) => (
  <Box onClick={nextSlide}>
    <ArrowRightCircleIcon className={styles['control']} style={{marginRight: '10px'}}/>
  </Box>
);