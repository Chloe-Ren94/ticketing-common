import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequstValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, RequstValidationError.prototype);
  }

  serializaErrors() {
    return this.errors.map(error => {
      return { message: error.msg }
    });
  }
}