import React from "react";
import { Redirect } from "react-router-dom";
import "./signin.css";
const Signin = props => {
  // if (props.username === "soal") {
  //   return <Redirect to="/" />;
  // }
  return (
    <div className="signin-container">
      <div>
        <input id="username" placeholder="username" />
        <br></br>
      </div>
      <div>
        <input id="password" type="password" placeholder="password" />
        <button onClick={props.handleLogin}> Signin</button>
      </div>
    </div>
  );
};

export default Signin;
