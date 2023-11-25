import {Box, Typography} from "@mui/material";
import * as styles from "./Header.styles";
import CustomButton from "../../ui/custom-button/CustomButton";
import {ButtonVariant} from "../../ui/custom-button/types";
import Link from "next/link";
import MobileDrawer from "./components/mobile-drawer/MobileDrawer";

const Header = () => {
  return (
    <header>
      <Box sx={styles.container}>
        <Link href='/' style={{width: '50%'}}>
          <Typography sx={styles.logo}>
            Da Vinci Art
          </Typography>
        </Link>
        <Box sx={styles.controls}>
          <CustomButton text={'Login'} sx={{borderRadius: '25px'}} variant={ButtonVariant.OUTLINED}/>
          <CustomButton text={'Register'} sx={{borderRadius: '25px'}} variant={ButtonVariant.OUTLINED}/>
        </Box>
        <MobileDrawer sx={styles.mobileControls}/>
      </Box>
    </header>
  );
}

export default Header;