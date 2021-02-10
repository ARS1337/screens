import React from "react";

function Login(props) {
  return (
    <>
        <div id="login-container">
          <div className="login-box" id="login-box">
            <h2>Login</h2>
            <input type="text" defaultValue="7977586379" id="login-id" />
            <br />
            <input type="text" defaultValue="123456" id="login-password" />
            <br />
            <button onClick={props.onClick}>Login</button>
          </div>
        </div>
        {console.log("login")}
    </>
  );
}


export default Login;
