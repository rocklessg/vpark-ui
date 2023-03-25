import React, { Fragment, useState } from 'react'
import axios from 'axios'

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
      <Fragment>
            <div>SignUp</div>
            <label>First Name</label>
            <input type="text" id="textFirstName" placeholder="Enter first name" onChange={(e) => handleFirstNameChange(e.target.value)} /><br/>
            <label>Last Name</label>
            <input type="text" id="textLastName" placeholder="Enter first last name" onChange={(e) => handleLastNameChange(e.target.value)} /><br/>
            <label>Email</label>
            <input type="text" id="textEmail" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)} /><br/>
            <label>Phone</label>
            <input type="text" id="textPhone" placeholder="Enter phone number" onChange={(e) => handlePhoneNumberChange(e.target.value)} /><br/>
            <label>Password</label>
            <input type="text" id="textPassword" placeholder="Enter password" onChange={(e) => handlePasswordChange(e.target.value)} /><br/>
            <label>Confirm Password</label>
            <input type="text" id="textConfirmPassword" placeholder="Enter password" onChange={(e) => handleConfirmPasswordChange(e.target.value)} /><br/><br/>
            <button onClick={() => handleRegister()}>Register</button>
      </Fragment>
    
  )
}

export default SignUp
