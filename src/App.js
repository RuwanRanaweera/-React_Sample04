import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStates, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response)=>{
      console.log("response",response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].username);
      }
     // console.log("response",response.data);
    
    
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>User Name</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>


      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="User Name ..."     onChange={(e) => {
            setUsername(e.target.value);
          }} />
        <input type="text" placeholder="Password ..."     onChange={(e) => {
            setPassword(e.target.value);
          }} />
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStates}</h1>
    </div>
  );
}

export default App;
