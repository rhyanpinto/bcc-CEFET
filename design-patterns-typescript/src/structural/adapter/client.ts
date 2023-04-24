import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/emailValidatorProtocol";
import { EmailValidatorClassAdapter } from "./validation/EmailValidatorClassAdapter";
import { emailValidatorFnAdapter } from "./validation/EmailValidatorFnAdapter";


function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email is valid (CLASS)');
  } else {
    console.log('Email is invalid (CLASS)');
  }
}

function validateEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email is valid (FN)');
  } else {
    console.log('Email is invalid (FN)');
  }
}

const email = 'rhyanpinto@gmail.com';
validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFn(emailValidatorFnAdapter, email );
