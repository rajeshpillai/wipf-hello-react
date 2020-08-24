import React, {useState} from 'react'

const API = "https://conduit.productionready.io/api/";  //users/login

export default function Login({onLogin}) {
  const [email, setEmail] = useState('tt@tt.com');  // only for temp testing
  const [password, setPassword] = useState('12345678');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}users/login`, {
      method: 'POST',
      body: JSON.stringify({
       user: {
         email,
         password
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
              value={email}
              onChange = {e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input className="form-input-control" type="text" placeholder="password"
              value={password} 
              onChange = {e => setPassword(e.target.value)}/>
          </div>
          <button className="btn btn-primary">
              LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}
