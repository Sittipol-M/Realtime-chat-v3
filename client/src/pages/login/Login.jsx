import { useState } from "react";
import { login } from "../../api/authentication";
import InputIcon from "../../components/inputIcon/InputIcon";
import SocialButton from "../../components/socialButton/SocialButton";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ usernameOrEmail: "", password: "" });

  const handleTypeUsernameOrEmail = ({ input: usernameOrEmail }) => {
    setLoginData({ ...loginData, usernameOrEmail });
  };

  const handleTypePassword = ({ input: password }) => {
    setLoginData({ ...loginData, password });
  };

  const handleLogin = async ({ event }) => {
    event.preventDefault();
    const { usernameOrEmail, password } = loginData;
    const { status, jwt } = await login({ usernameOrEmail, password });
    if (status === 200) localStorage.setItem("auth-token", jwt);
    if (localStorage.getItem("auth-token")) navigate("/chat");
  };

  return (
    <div className="login-container  flex-center-column">
      <h1>Login Chat App</h1>
      <div className="login-box flex-center-column">
        <form className="top flex-center-column">
          <InputIcon icon="fa-solid fa-user" placeholder="Username or Email" type="text" handleTypeInput={handleTypeUsernameOrEmail} />
          <InputIcon icon="fa-solid fa-key" placeholder="Password" type="password" handleTypeInput={handleTypePassword} />
          <div className="input-button-section">
            <div className="remember-me flex-center-row">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button onClick={(event) => handleLogin({ event })}>LOGIN</button>
          </div>
          <div className="input-button-section">
            <a href="/register">Register now</a>
            <a href="/forget-password">Forgot password?</a>
          </div>
        </form>
        <div className="mid flex-center-row">
          <hr className="first-hr" />
          <span>or</span>
          <hr className="second-hr" />
        </div>
        <div className="bottom flex-center-column">
          <SocialButton icon="fa-brands fa-facebook" description="FACEBOOK" backgroundDescription="#4267b2" backgroundIcon="#2e477b" />
          <SocialButton icon="fa-brands fa-twitter" description="TWITTER" backgroundDescription="#1da1f2" backgroundIcon="#0a71b1" />
          <SocialButton icon="fa-brands fa-google" description="GMAIL" backgroundDescription="#db4437" backgroundIcon="#a0271d" />
        </div>
      </div>
    </div>
  );
};

export default Login;
