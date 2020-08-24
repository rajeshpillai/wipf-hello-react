import React, {useState} from 'react'

const API = "https://conduit.productionready.io/api/";  //users/login

export default function Logout({onLogout}) {
  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  }

  return (
    <a href="#" onClick={handleLogout}>Logout</a>
  )
}
