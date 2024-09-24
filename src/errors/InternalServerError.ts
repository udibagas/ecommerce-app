export class InternalServerError {
  message: string;
  status: number = 500;

  constructor(message = "Internal server error") {
    this.message = message;
  }

  toJSON() {
    return {
      statusCode: this.status,
      message: this.message,
    };
  }
}
