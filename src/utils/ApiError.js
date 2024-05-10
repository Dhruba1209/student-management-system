export class ApiError {
  constructor(statusCode, message = "somethings went wrong", errors = []) {
    this.statusCode = statusCode;
    this.message = message;
    (this.errors = errors), (this.success = false);
  }
}
