'use client';

import {Box, IconButton, InputAdornment, Typography} from "@mui/material";
import CustomInput from "../../common/ui/custom-input/CustomInput";
import CustomButton from "../../common/ui/custom-button/CustomButton";
import FormIcon from "../../common/ui/form/form-icon/FormIcon";
import FormLink from "../../common/ui/form/form-link/FormLink";
import {ButtonVariant} from "../../common/ui/custom-button/types";
import Link from "next/link";

import loginIcon from '../../../public/icons/open-door.png'

import * as styles from './LoginPage.styles';
import {useContext, useState} from "react";
import {checkLoginData} from "./utils/checkLoginData";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useRouter} from "next/navigation";
import {loginUser} from "../../../lib/api/api";
import {UserContext} from "../../../lib/hooks/use-authentication/useAuthentication";
import StorageUtil from "../../../lib/utils/StorageUtil";


const LoginPage = () => {
  const [passwordState, setPasswordState] = useState('password');
  const router = useRouter();
  const { login } = useContext(UserContext)
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (checkLoginData(loginData)) {
      await loginUser(loginData);
      login(StorageUtil.getAccessToken())
      router.push('/');
    }
  };

  return (
    <Box sx={styles.formContainer}>
      <FormIcon src={loginIcon} alt={"login-page icon"}/>
      <Typography sx={styles.formHeader}>Log in to your account</Typography>
      <form
        style={{display: 'flex', flexDirection: 'column', marginTop: '25px',}}
        onSubmit={handleSubmit}
      >
        <CustomInput label='Username' name='username' object={loginData} setObject={setLoginData}/>
        <CustomInput
          type={passwordState}
          label='Password'
          name='password'
          object={loginData}
          setObject={setLoginData}
          endAdornment={
            <InputAdornment position="end" sx={{pr: '5px'}}>
              <IconButton
                onClick={
                  () => passwordState === 'text' ?
                    setPasswordState('password')
                    : setPasswordState('text')
                }
                edge="end"
              >
                {passwordState === 'text' ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <CustomButton type='submit' text={'Log in'} variant={ButtonVariant.CONTAINED} sx={{mt: '10px'}}/>
        <FormLink text={"Don't have an account"} href={'/register'}/>
        <Link href={'/'}>
          <CustomButton text={'To Main Page'} sx={{mt: '30px', width: '100%'}}/>
        </Link>
      </form>
    </Box>
  );
}

export default LoginPage;
