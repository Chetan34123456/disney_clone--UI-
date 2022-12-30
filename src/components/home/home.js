import React from 'react'
import './home.css';
import { ImgSlider, Viewers, Movies} from '../index';

const home = () => {
  return (
    <div className='disney__home'>
      <ImgSlider />
      <Viewers />
      <Movies />
    </div>
  )
}
export default home;
