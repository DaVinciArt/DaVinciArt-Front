export const REGEX = {
  UPPER_CASE: /[A-Z]/,
  SPECIAL_CHAR: /[!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?]/,
  DIGIT: /\d/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  LATIN:  /^[A-Za-z\s]+$/,
  ONLY_LATIN: /^[A-Za-z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]+$/,
  SPACES: /\s/,
};