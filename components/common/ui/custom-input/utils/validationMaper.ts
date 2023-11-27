import {emailValidator, namesValidator, passwordValidator, usernameValidator} from "./inputValidators";

interface ValidatorMap {
  [key: string]: (value: string) => string[];
}

export const validationMaper: ValidatorMap = {
  USERNAME: usernameValidator,
  FIRST_NAME: namesValidator,
  LAST_NAME: namesValidator,
  EMAIL: emailValidator,
  PASSWORD: passwordValidator,
}
