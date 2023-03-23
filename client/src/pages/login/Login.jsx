import SocialButton from "../../components/socialButton/SocialButton";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container  flex-center-column">
      <h1>Login Chat App</h1>
      <div className="login-box flex-center-column">
        <form className="top flex-center-column">
          <div className="input-add-icon">
            <div className="flex-center-column">
              <i class="fa-solid fa-user"></i>
            </div>
            <input type="text" name="username-email" placeholder="Username or Email" />
          </div>
          <div className="input-add-icon">
            <div className="flex-center-column">
              <i class="fa-solid fa-key"></i>
            </div>
            <input type="text" name="password" placeholder="Password" />
          </div>
          <div className="input-button-section">
            <div className="remember-me flex-center-row">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button>LOGIN</button>
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
