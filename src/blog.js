import React, {useState} from 'react'
import Login from './features/login'
import Logout from './features/logout'
import Article from './features/article';

import {
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function BlogApp() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("blog:user")) || {});
  
  const onLogin = (user) => {
    setUser(user);
    localStorage.setItem("blog:user", JSON.stringify(user));
  }

  const onLogout = () => {
    setUser({});
    localStorage.removeItem("blog:user");
  }
  return (
    <div className="container">
      <h2>BLOG</h2>
      { user.id == undefined && <Login onLogin={onLogin}/> }
      { user.id != undefined &&  <Logout onLogout={onLogout}/> }
      { user.id != undefined &&<Article/> }

    </div>
  )
}
