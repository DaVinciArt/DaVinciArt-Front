import {
  emailValidator,
  labelValidator,
  namesValidator,
  passwordValidator,
  priceValidator, tagsValidator,
  usernameValidator
} from "./inputValidators";

interface ValidatorMap {
  [key: string]: (value: string) => string[];
}

export const validationMaper: ValidatorMap = {
  USERNAME: usernameValidator,
  FIRST_NAME: namesValidator,
  LAST_NAME: namesValidator,
  EMAIL: emailValidator,
  PASSWORD: passwordValidator,
  LABEL: labelValidator,
  PRICE: priceValidator,
  TAGS: tagsValidator,
  PICTURE_LABEL: labelValidator,
}
