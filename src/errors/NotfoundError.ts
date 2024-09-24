export class NotfoundError {
  message: string;
  status: number = 404;

  constructor(message = "Data not found") {
    this.message = message;
  }

  toJSON() {
    return {
      statusCode: this.status,
      message: this.message,
    };
  }
}
