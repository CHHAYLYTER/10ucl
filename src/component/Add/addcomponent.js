import axios from 'axios'
import './add.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonAdd  ()  {
const [names, setNames] = useState('')
const [email, setEmail] = useState('')
console.log( names, email)

const handleNames = (e) => {
  setNames(e.target.value)
}
const handleEmail = (e) => {
  setEmail(e.target.value)
}

const navigat = useNavigate();
const handlesubmit = (e) => {
  e.preventDefault();
  axios.post('http://192.168.0.179:3000/book', names, email)
  .then(res => {
    console.log(res)
    alert("Successfully!");
    navigat('/');
  }).catch(err => console.log(err));
}

  return (
    <div className='login-form-container'>
        <form onSubmit={handlesubmit}>
        <h3>login form</h3>
            <input type='text' name="name" value={names} placeholder="Enter your Name" class="box" id='name'
             onChange={handleNames}/>

              <input type="email" name="email" value={email} placeholder="Enter your email"  class="box" id='email'
              onChange={handleEmail}/>

            <div className="remember">
              <input type="checkbox" name="" id="remember-me" />
              <label for="remember-me">remember me</label>
            </div>
            <input type="submit" id='submit' name='submit' value="login now" className='btn'/>
            <p>forget password? <a href="#">click here</a></p>
            <p>don't have an account? <a href="#">create one</a></p>
        </form>
      </div>
  )
}
export default ButtonAdd
