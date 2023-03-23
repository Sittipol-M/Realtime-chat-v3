import UnauthorizedError from "../errors/UnauthorizedError.js";
import { decodeJWT } from "../helpers/jwt.js";
import { getTodayPlusZeroUTC, isFirstDateGreaterSecondDate } from "../utils/date.js";

const checkAuth = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) throw new UnauthorizedError({ message: "jwt is required" });
  const { _id, username, email, expireDate } = decodeJWT({ token: authToken });
  const today = getTodayPlusZeroUTC();
  const isTokenExpire = isFirstDateGreaterSecondDate({ firstDate: today, secondDate: new Date(expireDate) }) ? true : false;
  if (isTokenExpire) throw new UnauthorizedError({ message: "jwt expired" });
  req.user = { id: _id, username, email };
  next();
};

export default checkAuth;
