import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosRelData } from "./StoreAndSlices/PosRelData";
import { fetchToken } from "./StoreAndSlices/HandleLogin";

function Login(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const latitude = useSelector((state) => state.Location.latitude);
  const longitude = useSelector((state) => state.Location.longitude);
  let [id, changeId] = useState("");
  let [password, changePassword] = useState("");

  if (props.data[0] == true) {
    return (
      <>
        <form
          id="login-container"
          name="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.onClick();
            dispatch(
              fetchToken([
                "https://staging.mypcot.com/Homefood/customergateway/processLogin",
                ,
                {
                  phone_number: id,
                  password: password,
                },
              ])
            ).then((r) => {
              console.log(r);
              if(r.payload.success=="1"){
                dispatch(
                  fetchPosRelData([
                    props.data[1]
                    ,
                    { "X-Access-Token": r.payload.data[0].token },
                    {
                      latitude: latitude,
                      longitude: longitude,
                    },
                    "recommended",
                  ])
                );
              }
            });
          }}
        >
          <div className="login-box" id="login-box">
            <div className="login-box-head">
              <h2>Login</h2>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  props.onClick();
                }}
              >
                X
              </button>
            </div>
            <input
              type="text"
              defaultValue="7977586379"
              value={id}
              id="Id"
              onChange={(event) => {
                changeId(event.target.value);
              }}
            />
            <br />
            <input
              type="text"
              defaultValue="123456"
              value={password}
              id="password"
              onChange={(event) => {
                changePassword(event.target.value);
              }}
            />
            <br />
            {returnLogInOut()}
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        {() => {
          return <label>{props.data}</label>;
        }}
      </>
    );
  }
}

let returnLogInOut = () => {
  return <button type="submit">Login</button>;
};
export default Login;
