import "./App.css";
import React from "react";
import NavigationBar from "./shared/navigationbar/NavigationBar";
import Login from "./shared/login/Login";

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Login></Login>
    </div>
  );
};

export default App;
