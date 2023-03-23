import { useState } from "react";
import InputIcon from "../../components/inputIcon/InputIcon";
import "./register.scss";
import { register } from "../../api/authentication";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "", repeatPassword: "", tel: "" });

  const handleTypeUsername = ({ input: username }) => {
    setRegisterData({ ...registerData, username });
  };

  const handleTypeEmail = ({ input: email }) => {
    setRegisterData({ ...registerData, email });
  };

  const handleTypePassword = ({ input: password }) => {
    setRegisterData({ ...registerData, password });
  };

  const handleTypeRepeatPassword = ({ input: repeatPassword }) => {
    setRegisterData({ ...registerData, repeatPassword });
  };

  const handleTypeTel = ({ input: tel }) => {
    setRegisterData({ ...registerData, tel });
  };

  const handleSubmit = async ({ event }) => {
    event.preventDefault();
    const result = await register(registerData);
    if (result.status === 200) navigate("/login");
  };

  return (
    <div className="register-container flex-center-column">
      <h1>Register Chat App</h1>
      <div className="register-box flex-center-column">
        <form className="flex-center-column">
          <InputIcon icon="fa-solid fa-user" placeholder="Username" type="text" handleTypeInput={handleTypeUsername} />
          <InputIcon icon="fa-solid fa-envelope" placeholder="Email" type="text" handleTypeInput={handleTypeEmail} />
          <InputIcon icon="fa-solid fa-phone" placeholder="Tel" type="tel" handleTypeInput={handleTypeTel} />
          <InputIcon icon="fa-solid fa-key" placeholder="Password" type="password" handleTypeInput={handleTypePassword} />
          <InputIcon icon="fa-solid fa-key" placeholder="Confirm Password" type="password" handleTypeInput={handleTypeRepeatPassword} />
          <button onClick={(event) => handleSubmit({ event })}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
