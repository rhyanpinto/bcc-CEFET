import isEmail from "validator/lib/isEmail";

import { EmailValidatorProtocol } from "./emailValidatorProtocol";

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}