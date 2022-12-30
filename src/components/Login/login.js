import React from 'react'
import './login.css';
import logo3 from '../../assets/images/cta-logo-one.svg';
import logo5 from '../../assets/images/cta-logo-two.png';

const login = (props) => {
  return (
    <div className='disney__login'>
      <div className='disney__login-content'>
        <img src={ logo3} alt="3logo" />
        <a href = "#" className=''>Sign In</a>
        <div className='disney__login-content-description'>
          <p>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
        </div>
        <div className='disney__login-content-logos'>
          <img src={logo5} alt="5logo" />
        </div>
      </div>
    </div>
  )
}

export default login