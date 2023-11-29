'use client';

import {Box, Typography} from "@mui/material";
import * as styles from "./Header.styles";
import CustomButton from "../../ui/custom-button/CustomButton";
import {ButtonVariant} from "../../ui/custom-button/types";
import Link from "next/link";
import MobileDrawer from "./components/mobile-drawer/MobileDrawer";
import ROUTES from "./components/constants";
import {usePathname} from "next/navigation";
import StorageUtil from "../../../../lib/utils/StorageUtil";
import {decodeToken} from "../../../../lib/utils/decodeToken";
import {useEffect, useState} from "react";
import HeaderDesktopCard from "./components/header-desktop-card/HeaderDesktopCard";
import {STORAGE_KEYS} from "../../../../types/utils/storage";

const Header = () => {
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState('')
  const [isLogged, setisLogged] = useState(!!accessToken)
  const isLoginOrRegister = ['/login', '/register'].includes(pathname);
  const user =
    decodeToken(accessToken)?.dataValues ?
      decodeToken(accessToken).dataValues
      :
      decodeToken(accessToken);

  useEffect(() => {
    setAccessToken(StorageUtil.getAccessToken())
  }, [localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)]);

  useEffect(() => {
    setisLogged(!!accessToken)
  }, [accessToken]);

  return (
    <header>
      <Box sx={styles.container(isLoginOrRegister)}>
        <Link href='/'>
          <Typography sx={styles.logo}>
            Da Vinci Art
          </Typography>
        </Link>
        <Box sx={{display: isLoginOrRegister ? 'none' : 'flex'}}>
          {isLogged ?
            <HeaderDesktopCard user={user}/>
            :
            <Box sx={styles.controls}>
              {ROUTES.map((route, index) => (
                <Link key={index} href={route.path}>
                  <CustomButton text={route.text} sx={{borderRadius: '25px'}} variant={ButtonVariant.OUTLINED}/>
                </Link>
              ))}
            </Box>
          }
        </Box>
        <MobileDrawer sx={styles.mobileControls(isLoginOrRegister)}/>
      </Box>
    </header>
  );
}

export default Header;