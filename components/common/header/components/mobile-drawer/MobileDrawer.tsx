'use client';

import React, {FC} from "react";
import {Box, Divider, SwipeableDrawer, SxProps, Theme, Typography} from "@mui/material";
import {Bars3Icon} from "@heroicons/react/24/outline";

import * as styles from './MobileDrawer.styles';
import Link from "next/link";
import CustomButton from "../../../../ui/custom-button/CustomButton";
import {ButtonVariant} from "../../../../ui/custom-button/types";

interface MobileDrawerProps {
  sx?: SxProps<Theme>;
}

const MobileDrawer: FC<MobileDrawerProps> = ({
  sx = {},
}) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState(open );
      };

  return (
    <Box sx={sx}>
      <Box onClick={toggleDrawer(true)} sx={styles.drawerButton}>
        <Bars3Icon style={{width: '30px', height: 'auto'}}/>
      </Box>
      <SwipeableDrawer
        anchor='top'
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}

      >
        <Box sx={{padding: '10px'}}>
          <Link href='/' style={{display: 'block', width: 'fit-content', margin: '0 auto'}}>
            <Typography sx={styles.drawerLogo}>
              Da Vinci Art
            </Typography>
          </Link>
          <Box sx={styles.drawerControls}>
            <CustomButton text={'Login'} sx={styles.controlsButton} variant={ButtonVariant.OUTLINED}/>
            <Divider orientation='vertical' flexItem sx={styles.controlsDivider}/>
            <CustomButton text={'Register'} sx={styles.controlsButton} variant={ButtonVariant.OUTLINED}/>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileDrawer;
