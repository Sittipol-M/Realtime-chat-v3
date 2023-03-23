import httpStatusCodes from "../helpers/httpStatusCode.js";

class UnauthorizedError extends Error {
  constructor({ message, detail }) {
    super(message);
    this.detail = detail;
    this.status = httpStatusCodes.UNAUTHORIZED;
  }
}

export default UnauthorizedError;
