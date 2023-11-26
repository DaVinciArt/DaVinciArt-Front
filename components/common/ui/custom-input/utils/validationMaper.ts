import {emailValidator, namesValidator, passwordValidator, usernameValidator} from "./inputValidators";

interface ValidatorMap {
  [key: string]: (value: string) => string[];
}

export const validationMaper: ValidatorMap = {
  USERNAME: usernameValidator,
  NAME: namesValidator,
  SURNAME: namesValidator,
  EMAIL: emailValidator,
  PASSWORD: passwordValidator,
}
