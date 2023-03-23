import Joi from "joi";
import ExistedError from "../../others/errors/ExistedError.js";
import { ValidationError } from "../../others/errors/ValidationError.js";
import { getUserByUsernameOrTelOrEmail } from "./authRepository.js";

const validateExistedUser = async ({ username, email, tel }) => {
  const user = await getUserByUsernameOrTelOrEmail({ username, email, tel });
  if (user) throw new ExistedError({ message: "User has created" });
};

const validateRegister = async ({ username, email, tel, password, repeatPassword }) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().required(),
    email: Joi.string().email().email().required(),
    tel: Joi.number().required(),
    password: Joi.string().alphanum().required(),
    repeatPassword: Joi.ref("password"),
  }).with("password", "repeatPassword");

  try {
    await schema.validateAsync({ username, email, tel, password, repeatPassword });
  } catch (error) {
    throw new ValidationError({ message: error.message });
  }
};

const validateLogin = async ({ username, email, password }) => {
  const schema = Joi.object({
    username: Joi.string().alphanum(),
    email: Joi.string().email().email(),
    password: Joi.string().alphanum().required(),
  }).or("email", "username");
  try {
    await schema.validateAsync({ username, email, password });
  } catch (error) {
    throw new ValidationError({ message: error.message });
  }
};

export { validateRegister, validateExistedUser, validateLogin };
