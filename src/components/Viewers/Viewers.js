import React from 'react';
import './Viewers.css';
import disney from '../../assets/images/viewers-disney.png';
import pixar from '../../assets/images/viewers-pixar.png';
import marvel from '../../assets/images/viewers-marvel.png';
import starwars from '../../assets/images/viewers-starwars.png';
import national from '../../assets/images/viewers-national.png';
const Viewers = () => {
  return (
    <div className='disney__viewers'>
      <div className='disney__viewers-img'>
        <img src={ disney} alt="disney_view" />
      </div>
      <div className='disney__viewers-img'>
        <img src={pixar} alt="pixar_view" />
      </div>
      <div className='disney__viewers-img'>
        <img src={marvel} alt="marvel_view" />
      </div>
      <div className='disney__viewers-img'>
        <img src={starwars} alt="starwars_view" />
      </div>
      <div className='disney__viewers-img'>
        <img src={ national} alt="national_view" />
      </div>
      
      
      
      
      
    </div>
  )
}

export default Viewers