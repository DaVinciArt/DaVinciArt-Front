import {User} from "../../../../types/User";
import {
  emailValidator,
  namesValidator,
  passwordValidator,
  usernameValidator
} from "../../../common/ui/custom-input/utils/inputValidators";

export const checkNewUser = (user : User) => {
  let isValid = true;

  if (usernameValidator(user.username).length > 0 || user.username === '') { isValid = false; }
  if (namesValidator(user.name).length > 0 || user.name === '') { isValid = false; }
  if (namesValidator(user.surname).length > 0 || user.surname === '') { isValid = false; }
  if (emailValidator(user.email).length > 0 || user.email === '') { isValid = false; }
  if (passwordValidator(user.password).length > 0 || user.password === '') { isValid = false; }
  if (!user.username) { isValid = false; }

  return isValid;
}