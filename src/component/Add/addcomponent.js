import React from 'react'
import './add.css'

const ButtonAdd = () => {
  return (
    <div className='login-form-container'>
        <form action=''>
        <h3>login form</h3>
            <input type='text' name="" placeholder="Enter your Name" id="" class="box"/>

              <input type="email" name="" placeholder="Enter your email" id="" class="box"/>

            <div className="remember">
              <input type="checkbox" name="" id="remember-me" />
              <label for="remember-me">remember me</label>
            </div>
            <input type="submit" value="login now" className='btn' />
            <p>forget password? <a href="#">click here</a></p>
            <p>don't have an account? <a href="#">create one</a></p>
        </form>
      </div>
  )
}

export default ButtonAdd
