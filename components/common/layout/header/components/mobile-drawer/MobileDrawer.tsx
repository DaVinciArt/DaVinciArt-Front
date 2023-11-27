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
  const [drawerState, setDrawerState] = React.useState(false);

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

        setDrawerState(open);
      };

  return (
    <Box sx={sx}>
      <Box onClick={toggleDrawer(true)} sx={styles.drawerButton}>
        <Bars3Icon style={{width: '30px', height: 'auto'}}/>
      </Box>
      <SwipeableDrawer
        anchor='top'
        open={drawerState}
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
            <Link href={'/login-page'} onClick={() => setDrawerState(false)}>
              <CustomButton text={'Login'} sx={styles.controlsButton} variant={ButtonVariant.OUTLINED}/>
            </Link>
            <Divider orientation='vertical' flexItem sx={styles.controlsDivider}/>
            <Link href={'/register'} onClick={() => setDrawerState(false)}>
              <CustomButton text={'Register'} sx={styles.controlsButton} variant={ButtonVariant.OUTLINED}/>
            </Link>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileDrawer;
