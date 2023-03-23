import httpStatusCodes from "../helpers/httpStatusCode.js";
const handleError = (error, req, res, next) => {
  const { message, status, details } = error;
  console.error(error);
  if (error) {
    res.status(status || httpStatusCodes.INTERNAL_SERVER).send({ success: false, message, details });
  } else {
    next();
  }
};

export default handleError;
