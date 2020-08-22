import React from 'react';

import {
  NavLink
} from "react-router-dom";

export default function Layout() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand" href="#">Home</NavLink>
      <NavLink className="navbar-brand"  to="/todowithoutcontext">Todo Without Context Demo</NavLink>
      <NavLink className="navbar-brand"  to="/todowithcontext">Todo with Context</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tutorials
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" exact to="/contactus">Contact Us</NavLink>
              <NavLink className="dropdown-item" to="/counter">Counter</NavLink>
              <NavLink className="dropdown-item" to="/counterfn">Counter useState fn</NavLink>
              <NavLink className="dropdown-item" to="/counterclass">Counter className</NavLink>
              <NavLink className="dropdown-item" to="/countermultiplestate">Counter Multiple State</NavLink>
              <NavLink className="dropdown-item" to="/usestatedemo">useState Demo</NavLink>
              <NavLink className="dropdown-item" to="/usereducerdemo">useReducer Demo</NavLink>
              <NavLink className="dropdown-item" to="/userefdemo">useRef Demo</NavLink>
              <NavLink className="dropdown-item" to="/useeffectdemo">useEffect Demo</NavLink>
              <NavLink className="dropdown-item" to="/modaldemo">Modal Demo</NavLink>
              <NavLink className="dropdown-item" to="/tabdemo">Tab Demo</NavLink>
              
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}