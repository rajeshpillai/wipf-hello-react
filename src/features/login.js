import React, {useState, useEffect} from 'react'
import "./common.css";
import {useFormValidation} from '../hooks/use-formvalidation';

const API = "https://conduit.productionready.io/api/";  //users/login


export default function Login({onLogin}) {
  
  const {handleSubmit, handleChange, values, errors, isSubmitting} = useFormValidation({
    email: "",
    password: ""
  }, validateForm, onSubmit);

  useEffect(() => {
    document.title = "Login Page";
  })

  function validateForm(values){
    console.log("Validate method called!!")

    let errors = {};
    if (!values.email) {
      errors.email = "Email required!";
    }
    if (!values.password) {
      errors.password = "Password required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters!";
    }
    return errors;
  }
  
  function onSubmit(){
    fetch(`${API}users/login`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
       user: {
         email: values.email,
         password: values.password
       }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      onLogin(json.user);
    })
  }
  

  return (
    <div className="card border-0 shadow">
      <div className="card-header">
        LOGIN
      </div> 
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-input-control" type="text" placeholder="email"
              value={values.email}
              className={errors.email && "error-input"}
              name="email"
              onChange = {handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input className="form-input-control" type="text" placeholder="password"
              value={values.password} 
              name="password"
              className={errors.password && "error-input"}
              onChange = {handleChange}/>
              {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button className="btn btn-primary">
              LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}
