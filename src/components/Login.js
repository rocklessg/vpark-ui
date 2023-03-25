import React, { useState } from 'react'
import axios from 'axios'
import vehicleImg from '../assets/horizontal-picture-car-parking-underground-garage-interior-with-neon-lights-autocars-parked-buildings-urban-constructions-space-transportation-vehicle-night-city-concept.jpg'

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
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign in</h2>
                <span>Login to your account</span>

            <div id='form' className='flex flex-col'>
            <input type="text" id="textEmail" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)} />
            <input type="text" id="textPassword" placeholder="Enter password" onChange={(e) => handlePasswordChange(e.target.value)} />
            <div className='rememberMe'>            
                <input type="checkBox" id="textRememberMe" onChange={(e) => handleRememberMeChange(e.target.value)} /> 
                <label>Remember Me?</label> 
            </div><br />
            <button className="btn" onClick={() => handleLogin()}>Login</button>
                </div>
            </div>
            <div className="col-2">
                <img src={vehicleImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Login