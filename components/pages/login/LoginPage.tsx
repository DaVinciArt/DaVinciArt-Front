import {Box, Typography} from "@mui/material";
import loginIcon from '../../../public/icons/open-door.png'
import Image from "next/image";
import * as sxStyles from './LoginPage.styles';
import styles from './LoginPage.module.scss';
import CustomInput from "../../common/ui/custom-input/CustomInput";
import CustomButton from "../../common/ui/custom-button/CustomButton";
import {ButtonVariant} from "../../common/ui/custom-button/types";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Box sx={sxStyles.formContainer}>
      <Image src={loginIcon} alt={"login icon"} style={{
        width: '20%',
        maxWidth: '100px',
        height: 'auto',
        margin: '0 auto',
      }}/>
      <Typography sx={sxStyles.formHeader}>Log in to your account</Typography>
      <Box sx={sxStyles.form}>
        <CustomInput label='Email' placeholder='Enter your email'/>
        <CustomInput label='Password' placeholder='Enter your password'/>

        <CustomButton text={'Log in'} variant={ButtonVariant.CONTAINED} sx={{mt: '10px'}}/>
        <Link href={'/register'} className={styles['registerLink']}>
          Don't have an account?
        </Link>
        <Link href={'/'}>
          <CustomButton text={'To Main Page'} sx={{mt: '30px', width: '100%'}}/>
        </Link>
      </Box>
    </Box>
  );
}

export default LoginPage;
