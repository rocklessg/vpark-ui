import React, { Fragment, useState } from 'react'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

  const handleEmailChange = value => {
        setEmail(value)
    }

    const handlePasswordChange = value => {
        setPassword(value)
    }

    const handleRememberMeChange = value => {
        setRememberMe(value)
    }
    
    const handleLogin = () => {
        const data = {
            Email: email,
            Password: password,
            RememberMe: rememberMe,
        };

        const url = 'https://localhost:7068/api/Account/Login';
      axios.post(url, data)
        .then(result => {
          console.log(result.data)
            alert(result)
        })
        .catch(error => {
            alert(error)
        })
    }

  return (
    <Fragment>
      <div>Login</div>
      <label>Email</label>
            <input type="text" id="textEmail" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)} /><br/>
            <label>Password</label>
            <input type="text" id="textPassword" placeholder="Enter password" onChange={(e) => handlePasswordChange(e.target.value)} /><br/>
            <label>Remember me?</label>
            <input type="checkBox" id="textRememberMe" onChange={(e) => handleRememberMeChange(e.target.value)} /><br/><br/>
            <button onClick={() => handleLogin()}>Login</button>
    </Fragment>
  )
}

export default Login