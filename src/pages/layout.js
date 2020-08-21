import React from 'react';

import {
  NavLink
} from "react-router-dom";

export default function Layout() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand" href="#">Home</NavLink>
      <NavLink className="navbar-brand"  to="/todowithoutcontext">Todo Without Context Demo</NavLink>
      <NavLink className="navbar-brand"  to="/todowithcontext">Todo with Context</NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tutorials
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" exact to="/contactus">Contact Us</NavLink>
              <NavLink className="dropdown-item" to="/counter">Counter</NavLink>
              <NavLink className="dropdown-item" to="/counterfn">Counter useState fn</NavLink>
              <NavLink className="dropdown-item" to="/counterclass">Counter Class</NavLink>
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