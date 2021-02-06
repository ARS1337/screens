// import React from "react";
// import fetch from 'fetch';

// function Login() {
//   return (
//     <>
//         <div class="login-box" id="login-box">
//           <h2>Login</h2>
//           <input type="text" value="7977586379" id="login-id" />
//           <br />
//           <input type="text" value="123456" id="login-password" />
//           <br />
//           <button onClick={handleLogin()}>
//             Login
//           </button>
//           {console.log("888888888888888888888888888888888888888888888") }
//           <button onClick={printState()}>print state</button>
//         </div>
//     </>
//   );
// }
// export const handleLogin = () => {
//    {console.log("88899999999999999999999999999999999999") }

//    this.body= new FormData();

//    this.body.append("phone_number",document.getElementById("login-id").value);
//    this.body.append("password",document.getElementById("login-password").value);

//    this.tempInit=this.mainInit;
//    this.tempInit.body=this.body;
//    this.body = JSON.stringify(this.body);

//    fetch("https://staging.mypcot.com/Homefood/customergateway/processLogin",this.tempInit)
//    .then(r=>r.json())
//    .then(res=>{
//       console.log("ressssssssssssss");
//       console.log(res);
//       this.setState({
//          token:res.data.token
//       },console.log(this.state))
//    })
//  };

export default Login;
