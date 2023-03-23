import jwt from "jsonwebtoken";
import { addDays, getTodayPlusZeroUTC } from "../utils/date.js";
const generateJWT = ({ data }) => {
  const centerTime = getTodayPlusZeroUTC();
  const expireDate = addDays({ date: centerTime, amount: 2 });
  data = { ...data, expireDate };
  return jwt.sign(data, process.env.JWT_SECRET);
};

const decodeJWT = ({ token }) => {
  return jwt.decode(token);
};

export { generateJWT, decodeJWT };
