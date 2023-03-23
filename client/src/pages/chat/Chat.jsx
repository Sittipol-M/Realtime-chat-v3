import React from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth-token");
  if (!token) navigate("/login");
  return <div>Chat</div>;
};

export default Chat;
