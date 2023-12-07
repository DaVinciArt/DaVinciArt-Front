'use client';

import {Box, Typography} from "@mui/material";
import * as styles from "./Header.styles";
import CustomButton from "../../ui/custom-button/CustomButton";
import {ButtonVariant} from "../../ui/custom-button/types";
import Link from "next/link";
import MobileDrawer from "./components/mobile-drawer/MobileDrawer";
import ROUTES from "./components/constants";
import {usePathname} from "next/navigation";
import {useContext} from "react";
import HeaderDesktopCard from "./components/header-desktop-card/HeaderDesktopCard";
import {UserContext} from "../../../../lib/hooks/use-authentication/useAuthentication";

const Header = () => {
  const pathname = usePathname();
  const isLoginOrRegister = ['/login', '/register'].includes(pathname);
  const { user } = useContext(UserContext)

  return (
    <header>
      <Box sx={styles.container(isLoginOrRegister)}>
        <Link href='/'>
          <Typography sx={styles.logo}>
            Da Vinci Art
          </Typography>
        </Link>
        <Box sx={{display: isLoginOrRegister ? 'none' : 'flex'}}>
          {user ?
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