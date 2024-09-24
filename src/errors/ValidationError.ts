export class ValidationError {
  message: string;
  status: number = 400;
  errors: string[] = [];

  constructor(message = "Validation error", errors: string[]) {
    this.message = message;
    this.errors = errors;
  }

  toJSON() {
    return {
      statusCode: this.status,
      message: this.message,
      errors: this.errors,
    };
  }
}
