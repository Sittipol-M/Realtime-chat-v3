import { loginUser, registerUser } from "./authService.js";
import { validateRegister, validateExistedUser, validateLogin } from "./authValidation.js";

export const login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    await validateLogin({ username, email, password });
    const { jwt } = await loginUser({ username, email, password });
    res.send({ success: true, jwt });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { username, email, tel, password, repeatPassword } = req.body;
    await validateRegister({ username, email, tel, password, repeatPassword });
    await validateExistedUser({ username, email, tel });
    await registerUser({ username, email, tel, password });
    res.send({ success: true, message: "Register successful" });
  } catch (error) {
    next(error);
  }
};
