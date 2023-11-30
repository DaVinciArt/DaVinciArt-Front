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
  if (namesValidator(user.first_name).length > 0 || user.first_name === '') { isValid = false; }
  if (namesValidator(user.last_name).length > 0 || user.last_name === '') { isValid = false; }
  if (emailValidator(user.email).length > 0 || user.email === '') { isValid = false; }
  if (passwordValidator(user.password).length > 0 || user.password === '') { isValid = false; }

  return isValid;
}