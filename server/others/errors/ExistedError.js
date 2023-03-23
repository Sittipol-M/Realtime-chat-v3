import httpStatusCodes from "../helpers/httpStatusCode.js";

class ExistedError extends Error {
  constructor({ message, detail }) {
    super(message);
    this.detail = detail;
    this.status = httpStatusCodes.CONFLICT;
  }
}

export default ExistedError;
