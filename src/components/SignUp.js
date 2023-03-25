import React, { useState } from 'react'
import axios from 'axios'
import vehicleImg from '../assets/pexels-kamshotthat-3457780.jpg'

function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleFirstNameChange = value => {
        setFirstName(value)
    }

    const handleLastNameChange = value => {
        setLastName(value)
    }

    const handlePhoneNumberChange = value => {
        setPhoneNumber(value)
    }

    const handleEmailChange = value => {
        setEmail(value)
    }

    const handlePasswordChange = value => {
        setPassword(value)
    }

    const handleConfirmPasswordChange = value => {
        setConfirmPassword(value)
    }

    const handleRegister = () => {
        const data = {
            FirstName: firstName,
            LastName: lastName,
            PhoneNumber: phoneNumber,
            EmailAddress: email,
            Password: password,
            ConfirmPassword: confirmPassword,
        };

        const url = 'https://localhost:7068/api/Account/Register';
        axios.post(url, data)
        .then(result => {
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
                <h2>Welcome to VPARK</h2>
                <span>register and enjoy the service</span>

                <div id='form' className='flex flex-col'>
                    <input type="text" id="textFirstName" placeholder="first name" onChange={(e) => handleFirstNameChange(e.target.value)} />
                    <input type="text" id="textLastName" placeholder="last name" onChange={(e) => handleLastNameChange(e.target.value)} />
                    <input type="text" id="textEmail" placeholder="email" onChange={(e) => handleEmailChange(e.target.value)} />
                    <input type="text" id="textPhone" placeholder="phone number" onChange={(e) => handlePhoneNumberChange(e.target.value)} />
                    <input type="text" id="textPassword" placeholder="password" onChange={(e) => handlePasswordChange(e.target.value)} />
                    <input type="text" id="textConfirmPassword" placeholder="confirm password" onChange={(e) => handleConfirmPasswordChange(e.target.value)} />                                
                    <button className="btn" onClick={() => handleRegister()}>Register</button>
                </div>
            </div>
            <div className="col-2">
                <img src={vehicleImg} alt="" />
            </div>
        </div>
    </section>    
  )
}

export default SignUp
