import { REGEX } from "./regex";

export const usernameValidator = (text: string) => {
  const errorMessages: string[] = [];

  if (text.length > 0) {
    if (!REGEX.ONLY_LATIN.test(text)) {
      errorMessages.push('Latin letters only')
    }

    if (REGEX.SPACES.test(text)) {
      errorMessages.push('Without spaces')
    }
  }

  return errorMessages;
};

export const namesValidator = (text: string) => {
  const errorMessages: string[] = [];

  if (text.length > 0) {
    if (!REGEX.ONLY_LATIN.test(text)) {
      errorMessages.push('Latin letters only')
    }

    if (!REGEX.UPPER_CASE.test(text[0])) {
      errorMessages.push('The first letter should be uppercase')
    }

    if (REGEX.SPECIAL_CHAR.test(text)) {
      errorMessages.push('Without special characters')
    }

    if (REGEX.DIGIT.test(text)) {
      errorMessages.push('Without digits')
    }
  }

  return errorMessages;
};

export const emailValidator = (text: string) => {
  const errorMessages: string[] = [];

  if (text.length > 0) {
    if (!REGEX.EMAIL.test(text)) {
      errorMessages.push('It doesn\'t look like an email')
    }
  }

  return errorMessages;
};

export const passwordValidator = (text: string) => {
  const errorMessages: string[] = [];

  if (text.length > 0) {
    if (!REGEX.ONLY_LATIN.test(text)) {
      errorMessages.push('Latin letters only')
    }

    if (!REGEX.DIGIT.test(text)) {
      errorMessages.push('At least one digit')
    }

    if (!REGEX.UPPER_CASE.test(text)) {
      errorMessages.push('At least one uppercase letter')
    }

    if (!REGEX.SPECIAL_CHAR.test(text)) {
      errorMessages.push('At least one special character')
    }

    if (REGEX.SPACES.test(text)) {
      errorMessages.push('Without spaces')
    }
  }

  return errorMessages;
};

export const labelValidator = (text: string) => {
  const errorMessages: string[] = [];

  return errorMessages;
};

export const priceValidator = (text: string) => {
  const errorMessages: string[] = [];

  if (text.length > 0) {
    if (!REGEX.PRICE.test(text)) {
      errorMessages.push('First and last characters must be numbers')
    }
  }

  return errorMessages;
};

export const tagsValidator = (text: string) => {
  const errorMessages: string[] = [];

  if (text.length > 0) {
    if (!REGEX.TAGS.test(text)) {
      errorMessages.push('Match the template in the description')
    }
  }

  return errorMessages;
};
