import { createUserMongo, getUserByUsernameOrTelOrEmail } from "./authRepository.js";
import bcrypt from "bcryptjs";
import UnauthorizedError from "../../others/errors/UnauthorizedError.js";
import { generateJWT } from "../../others/helpers/jwt.js";

const encryptPassword = async ({ password }) => {
  const SALT_ROUND = Number(process.env.SALT_ROUND);
  const salt = await bcrypt.genSalt(SALT_ROUND);
  return await bcrypt.hash(password, salt);
};

const registerUser = async ({ username, email, tel, password }) => {
  const hashedPassword = await encryptPassword({ password });
  await createUserMongo({ username, email, tel, password: hashedPassword });
};

const comparePassword = async ({ password, hashedPassword }) => {
  let isSame = await bcrypt.compare(password, hashedPassword);
  if (!isSame) throw new UnauthorizedError({ message: "Password Incorrect" });
};

const loginUser = async ({ usernameOrEmail, password }) => {
  const user = await getUserByUsernameOrTelOrEmail({ username: usernameOrEmail, email: usernameOrEmail });
  await comparePassword({ password, hashedPassword: user.password });
  delete user.password;
  const jwt = generateJWT({ data: user });
  return { jwt };
};

export { registerUser, loginUser };
