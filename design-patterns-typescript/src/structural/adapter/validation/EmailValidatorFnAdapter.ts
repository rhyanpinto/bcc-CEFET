import isEmail from "validator/lib/isEmail";

import { EmailValidatorFnProtocol } from "./emailValidatorProtocol";

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string,
  ): boolean => {
  return isEmail(value);
};