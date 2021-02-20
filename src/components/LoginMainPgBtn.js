import React from "react";
import {
  clearToken,
  displayContainerVisible,
} from "./StoreAndSlices/HandleLogin";
import { useDispatch, useSelector } from "react-redux";

function LoginMainPgBtn() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const shouldDisplay = useSelector((state) => state.token.displayContainer);

  if (token == "") {
    return (
      <label
        onClick={() => {
          dispatch(displayContainerVisible());
        }}
      >
        Login
      </label>
    );
  } else {
    return (
      <label
        onClick={() => {
          dispatch(clearToken());
        }}
      >
        Logout
      </label>
    );
  }
}

export default LoginMainPgBtn;
