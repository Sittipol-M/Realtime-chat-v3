import ENV from "../env.json";
const API = ENV.API;
const register = async ({ username, email, tel, password, repeatPassword }) => {
  const response = await fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, tel, password, repeatPassword }),
  });
  const result = await response.json();
  return { status: response.status };
};

const login = async ({ usernameOrEmail, password }) => {
  const response = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usernameOrEmail, password }),
  });
  const result = await response.json();
  return { status: response.status, jwt: result.jwt };
};

export { register, login };
