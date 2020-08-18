import React, {useState} from 'react';

export default function UseStateDemo() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2>UseState Demo</h2>
      <input type="text" name="username" placeholder="username" 
        onChange={handleChange}/>
      <br/>
      {login.username}
      <br/>
      <input type="text" name="password" placeholder="password" 
        onChange={handleChange}/>
      <br/>
      {login.password}
    </div>
  )
}