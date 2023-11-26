import {
  emailValidator,
  passwordValidator, usernameValidator,
} from "../../../common/ui/custom-input/utils/inputValidators";

interface checkLoginDataProps {
  username: string,
  password: string
}

export const checkLoginData = (loginData: checkLoginDataProps) => {
  let isValid = true;

  if (usernameValidator(loginData.username).length > 0 || loginData.username === '') { isValid = false; }
  if (passwordValidator(loginData.password).length > 0 || loginData.password === '') { isValid = false; }

  return isValid;
}