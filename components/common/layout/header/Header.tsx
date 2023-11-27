'use client';

import {Box, Typography} from "@mui/material";
import * as styles from "./Header.styles";
import CustomButton from "../../ui/custom-button/CustomButton";
import {ButtonVariant} from "../../ui/custom-button/types";
import Link from "next/link";
import MobileDrawer from "./components/mobile-drawer/MobileDrawer";
import ROUTES from "./components/constants";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isLoginOrRegister = ['/login-page', '/register'].includes(pathname);

  return (
    <header>
      <Box sx={styles.container(isLoginOrRegister)}>
        <Link href='/'>
          <Typography sx={styles.logo}>
            Da Vinci Art
          </Typography>
        </Link>
        <Box sx={styles.controls(isLoginOrRegister)}>
          {ROUTES.map((route, index) => (
            <Link key={index} href={route.path}>
              <CustomButton text={route.text} sx={{borderRadius: '25px'}} variant={ButtonVariant.OUTLINED}/>
            </Link>
          ))}
        </Box>
        <MobileDrawer sx={styles.mobileControls(isLoginOrRegister)}/>
      </Box>
    </header>
  );
}

export default Header;