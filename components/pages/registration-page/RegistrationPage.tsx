'use client';

import {Avatar, Box, IconButton, InputAdornment, Typography} from "@mui/material";
import FormIcon from "../../common/ui/form/form-icon/FormIcon";
import CustomInput from "../../common/ui/custom-input/CustomInput";
import CustomButton from "../../common/ui/custom-button/CustomButton";
import {ButtonColor, ButtonSize, ButtonVariant} from "../../common/ui/custom-button/types";
import FormLink from "../../common/ui/form/form-link/FormLink";
import Link from "next/link";
import registerIcon from '../../../public/icons/register-icon.jpg';

import * as sxStyles from './RegistrationPage.styles';
import {useState} from "react";
import AvatarDropzone from "./components/AvatarDropzone";
import {
  emailValidator,
  namesValidator,
  passwordValidator,
  usernameValidator
} from "../../common/ui/custom-input/utils/inputValidators";
import {checkNewUser} from "./utils/checkNewUser";
import {Visibility, VisibilityOff } from "@mui/icons-material";


const RegistrationPage = () => {
  const [file, setFile] = useState<Blob | null>(null);
  const [avatarURL, setAvatarURL] = useState('');
  const [passwordState, setPasswordState] = useState('password');
  const [user, setUser] = useState({
    username: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    avatar: file,
  })


  const handleChangeImage = () => {
    setFile(null);
    setAvatarURL('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (checkNewUser(user)) {
      console.log(user)
    }
  };

  return (
    <Box sx={sxStyles.formContainer}>
      <FormIcon src={registerIcon} alt={"register icon"}/>
      <Typography sx={sxStyles.formHeader}>Join us!</Typography>
      <form
        style={{display: 'flex', flexDirection: 'column', marginTop: '25px',}}
        onSubmit={handleSubmit}
      >
        <CustomInput label='Username' name='username' object={user} setObject={setUser}/>
        <CustomInput label='Name' name='name' object={user} setObject={setUser}/>
        <CustomInput label='Surname' name='surname' object={user} setObject={setUser}/>
        <CustomInput type='email' label='Email' name='email' object={user} setObject={setUser}/>
        <CustomInput
          type={passwordState}
          label='Password'
          name='password'
          object={user}
          setObject={setUser}
          endAdornment={
            <InputAdornment position="end" sx={{pr: '5px'}}>
              <IconButton
                aria-label="toggle password visibility"
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

        {file ? (
          <Box sx={sxStyles.avatarContainer}>
            <Avatar sx={sxStyles.avatar} src={avatarURL} alt="avatar"/>
            <Box sx={sxStyles.avatarControls}>
              <CustomButton
                onClick={handleChangeImage}
                text={'Change'}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.CONTAINED}
                color={ButtonColor.INPUT}
                sx={{width: '100%'}}
              />
            </Box>
          </Box>
        ) : (
          <AvatarDropzone setFile={setFile} setAvatarURL={setAvatarURL} />
        )}

        <CustomButton type='submit' text={'Register'} variant={ButtonVariant.CONTAINED} sx={{mt: '40px'}}/>
        <FormLink text={"Already joined us?"} href={'/login-page'}/>
        <Link href={'/'}>
          <CustomButton text={'To Main Page'} sx={{mt: '30px', width: '100%'}}/>
        </Link>
      </form>
    </Box>
  );
};

export default RegistrationPage;
