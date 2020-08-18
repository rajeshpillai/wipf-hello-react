import React, {useState} from 'react';

export default function UseStateDemo() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleUsernameChange = (e) => {
    setLogin({
      username: e.target.value
    });
  }

  const handlePassswordChange = (e) => {
    setLogin({
      password: e.target.value
    });
  }

  return (
    <div>
      <h2>UseState Demo</h2>
      <input type="text" name="username" placeholder="username" 
        onChange={handleUsernameChange}/>
      <br/>
      {login.username}
      <br/>
      <input type="text" name="password" placeholder="password" 
        onChange={handlePassswordChange}/>
      <br/>
      {login.password}
    </div>
  )
}