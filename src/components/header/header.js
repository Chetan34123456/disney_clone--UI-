import React from 'react'
import disneyLogo from '../../assets/images/logo.svg';
import homeIcon from '../../assets/images/home-icon.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import watchList from '../../assets/images/watchlist-icon.svg';
import originalLogo from '../../assets/images/original-icon.svg';
import movieIcon from '../../assets/images/movie-icon.svg';
import seriesIcon from '../../assets/images/series-icon.svg';
import './header.css';
//import styled from 'styled-components'
const header = () => {
  return (
    
    <div className='disney__header'>
      <img src={ disneyLogo}  alt = "disney_logo" />
      <div className='disney__header-navMenu'>
        <a href= '#'>
          <img src={homeIcon} alt = "homeSection" />
          <span>Home</span>
        </a>
        <a>
          <img src={searchIcon} alt = "homeSection" />
          <span>Search</span>
        </a>
        <a>
          <img src={watchList} alt = "watchListSection" />
          <span>Watch list</span>
        </a>
        <a>
          <img src={originalLogo} alt = "originalSection" />
          <span>Originals</span>
        </a>
        <a>
          <img src={movieIcon} alt = "movieSection" />
          <span>Movie</span>
        </a>
        <a>
          <img src={seriesIcon} alt = "seriesSection" />
          <span>Series</span>
        </a>
      </div>
      <div className='disney__header-profile'>
        <img src={ movieIcon} alt="profile_image"/>
      </div>
    </div>
  )
}

export default header;