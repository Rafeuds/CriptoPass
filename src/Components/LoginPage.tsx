import React, { useState } from 'react';
import AppName from '../assets/Name.png'
import AppLogo from '../assets/Logo.png'
import EyeClosed from '../assets/EyeClose.svg'
import '../Styles/LoginPage.css'

const LoginPage = () => {

  return (
    <div className="login-container" style={{ backgroundColor: '#242424' }}>
      <img src={AppName} />
      <img src={AppLogo} className='logo-container' />

      <div className="password-container">

        <div className='password-row'>
          <input type="password" placeholder="Informe a sua senha" />
          <img src={EyeClosed} className="password-icon" />
        </div>

        <div className="button-row">
          <button className='button-login'>Login</button>
          <button className='button-info'>I</button>
        </div>

      </div>
      
    </div>

    /*
    
        <div className="login-container" style={{ backgroundColor: '#242424'}}>
          <img src={AppName} />
          <img src={AppLogo} className='logo-container' />
    
          <div className="password-container">
            <input type="password" placeholder="Informe a sua senha" />
            <img src={EyeClosed} className="password-icon" />
          </div>
    
          <div className="button-row">
            <button>Login</button>
            <button>I</button>
          </div>
        </div>
    
    */
  );
};

export default LoginPage;