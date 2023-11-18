import React from "react";
import NavigationBar from "../../shared/navigationbar/NavigationBar";
import LoginForm from "../../components/login/LoginForm";

const Login = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        style={{
          textAlign: "center",
          maxWidth: "30%",
          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        <h1 style={{ fontSize: "2em", color: "#333" }}>LOGIN IN</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
