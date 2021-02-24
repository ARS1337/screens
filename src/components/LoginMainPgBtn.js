import React, { useState } from "react";
import { clearToken } from "./StoreAndSlices/HandleLogin";
import { useDispatch, useSelector } from "react-redux";

function LoginMainPgBtn(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const status = useSelector((state) => state.token.doneLoading);
  const message = useSelector((state) => state.token.message);
  let [loginMessage, makeVisible] = useState(true);

  if (token == "") {
    return (
      <>
        <label
          onClick={() => {
            makeVisible(loginMessage=true);
            props.onClick();
          }}
        >
          Login
        </label>
        {loginMessage
          ? showMessage(status, message, loginMessage, makeVisible)
          : null}
        {console.log("makevisible is " + loginMessage)}
      </>
    );
  } else {
    return (
      <>
        <label
          onClick={() => {
            dispatch(clearToken());
          }}
        >
          Logout
        </label>
        {loginMessage
          ? showMessage(status, message, loginMessage, makeVisible)
          : null}
        {console.log("makevisible is " + loginMessage)}
      </>
    );
  }
}

let showMessage = (status, message, loginMessage, makeVisible) => {
  if (status == "pending") {
    return (
      <div class="message message-gray loginMessage">
        <label>Logging in...</label>
        <button
          onClick={() => {
            makeVisible((loginMessage = false));
          }}
        >
          X
        </button>
      </div>
    );
  } else if (status == "rejected") {
    return (
      <div class="message message-red loginMessage">
        <label>{message}</label>
        <button
          onClick={() => {
            makeVisible((loginMessage = false));
          }}
        >
          X
        </button>
      </div>
    );
  } else if (status == "fulfilled") {
    return (
      <div class="message message-green loginMessage">
        <label>{message}</label>
        <button
          onClick={() => {
            console.log("makevisible is " + loginMessage);
            makeVisible((loginMessage = false));
            console.log("makevisible is " + loginMessage);
          }}
        >
          X
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};
export default LoginMainPgBtn;
