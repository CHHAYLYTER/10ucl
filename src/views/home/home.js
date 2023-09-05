import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home_container'>
      <div className='box-1'>
        <h1>Wonder-Pass</h1>
      </div>


      <div className='box-2'>
        <div className="login-container">
          <h1>REGISTER</h1>
          <h5>IT'S COMPLETELY FREE</h5>
          <form action="">
            <div className="form-login">
              <label htmlFor="">Name</label>
            </div>
            <div className="input-login">
            <input type="text" placeholder='Your Full Name' />
            </div>

            <div className="form-login">
              <label htmlFor="">USERNAME</label>
            </div>
            <div className="input-login">
            <input type="text" placeholder='Username' />
            </div>

            <div className="form-login">
              <label htmlFor="">Email</label>
            </div>
            <div className="input-login">
              <input type="email" name="" id="" placeholder='Email address'/>
            </div>

            <div className="form-login">
              <label htmlFor="">PASSWORD</label>
            </div>
            <div className="input-login">
              <input type="password" name="" id="" placeholder='********'/>
            </div>

            <div className="form-login">
              <label htmlFor="">COMRIEM PASSWORD</label>
            </div>
            <div className="input-login">
              <input type="password" name="" id="" placeholder='********'/>
            </div>

            
            <label htmlFor=""></label><input type="checkbox" name="" id=""/>



            <input type="submit" value="CREATE ACCOUT" />
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
