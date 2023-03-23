import httpStatusCode from "../helpers/httpStatusCode.js";
export class ValidationError extends Error {
  constructor({ message, details }) {
    super(message);
    this.details = details;
    this.status = httpStatusCode.BAD_REQUEST;
  }
}
