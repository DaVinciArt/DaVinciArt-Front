import {NewUser} from "../../../../types/NewUser";
import {
  emailValidator,
  namesValidator,
  passwordValidator,
  usernameValidator
} from "../../../common/ui/custom-input/utils/inputValidators";

export const checkNewUser = (user : NewUser) => {
  let isValid = true;

  if (usernameValidator(user.username).length > 0 || user.username === '') { isValid = false; }
  if (namesValidator(user.firstname).length > 0 || user.firstname === '') { isValid = false; }
  if (namesValidator(user.surname).length > 0 || user.surname === '') { isValid = false; }
  if (emailValidator(user.email).length > 0 || user.email === '') { isValid = false; }
  if (passwordValidator(user.password).length > 0 || user.password === '') { isValid = false; }
  if (!user.avatar) { isValid = false; }

  return isValid;
}