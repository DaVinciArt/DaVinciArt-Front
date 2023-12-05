'use client';

import React, {FC, useContext} from "react";
import {Avatar, Box, Divider, SwipeableDrawer, SxProps, Theme, Typography} from "@mui/material";
import {Bars3Icon, CurrencyDollarIcon, HomeIcon, PencilSquareIcon, PlusIcon} from "@heroicons/react/24/outline";

import * as styles from './MobileDrawer.styles';
import Link from "next/link";
import CustomButton from "../../../../ui/custom-button/CustomButton";
import {ButtonVariant} from "../../../../ui/custom-button/types";
import {UserContext} from "../../../../../../lib/hooks/use-authentication/useAuthentication";
import Image from "next/image";
import pesPatron from "../../../../../../public/icons/dog.png";
import AccountTabLink from "./components/account-tab-link/AccountTabLink";

interface MobileDrawerProps {
  sx?: SxProps<Theme>;
}

const MobileDrawer: FC<MobileDrawerProps> = ({
  sx = {},
}) => {
  const [drawerState, setDrawerState] = React.useState(false);
  const { user } = useContext(UserContext);

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
          {user ?
            <Box sx={styles.userControls}>
              <Link href={'/account?tab=GENERAL'}>
                <Box sx={styles.userCardMobile}>
                  <Avatar src={user.avatar} sx={styles.avatar}></Avatar>
                  <Box>
                    <Typography sx={styles.cardUsername}>
                      {user.username}
                    </Typography>
                    <Typography sx={styles.cardBalance}>
                      {user.balance}
                      <Image src={pesPatron} alt={'patron icon'} style={{width: '20px', height: 'auto', marginLeft: '7px'}}/>
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <AccountTabLink
                href='/account?tab=GENERAL'
                text='General'
                icon={<HomeIcon width={20} />}
                onClick={toggleDrawer(false)}
              />
              <AccountTabLink
                href='/account?tab=ADD_COLLECTION'
                text='Add collection'
                icon={<PlusIcon width={20} />}
                onClick={toggleDrawer(false)}
              />
              <AccountTabLink
                href='/account?tab=REVIEWS'
                text='Reviews'
                icon={<PencilSquareIcon width={20} />}
                onClick={toggleDrawer(false)}
              />
              <AccountTabLink
                href='/account?tab=GET_MONEY'
                text='Get money'
                icon={<CurrencyDollarIcon width={20} />}
                onClick={toggleDrawer(false)}
              />
            </Box>
            :
            <Box sx={styles.drawerControls}>
              <Link href={'/login'} onClick={() => setDrawerState(false)}>
                <CustomButton text={'Login'} sx={styles.controlsButton} variant={ButtonVariant.OUTLINED}/>
              </Link>
              <Divider orientation='vertical' flexItem sx={styles.controlsDivider}/>
              <Link href={'/register'} onClick={() => setDrawerState(false)}>
                <CustomButton text={'Register'} sx={styles.controlsButton} variant={ButtonVariant.OUTLINED}/>
              </Link>
            </Box>
          }
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileDrawer;
