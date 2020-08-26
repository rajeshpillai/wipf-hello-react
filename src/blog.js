import React, {useState, useEffect} from 'react'
import Login from './features/login'
import Logout from './features/logout'
import Article from './features/article';

import {
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import Feeds from './features/feeds';

import {useDocumentTitle} from './hooks/use-document-title';

export default function BlogApp() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("blog:user")) || {});

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();


  useDocumentTitle("Blog");

  // useEffect(() => {
  //   document.title = "Blog Page";
  // })

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

      <Link to={`${url}/feeds`}>feeds</Link> | 
      <Link to={`${url}/articles`}>articles</Link>
       {path}
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/feeds`}>
          <Feeds/>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Article />
        </Route>
      </Switch>

    </div>
  )
}
