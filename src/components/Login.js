import React from "react";

function Login(props) {
  return (
    <>
        <div id="login-container">
          <div class="login-box" id="login-box">
            <h2>Login</h2>
            <input type="text" value="7977586379" id="login-id" />
            <br />
            <input type="text" value="123456" id="login-password" />
            <br />
            <button onClick={props.onClick}>Login</button>
          </div>
        </div>
    </>
  );
}


export default Login;
