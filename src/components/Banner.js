
import Logo from "../svg/SpaceX-Logo.wine.svg"
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./banner.css";
import { CSSTransition } from "react-transition-group";
import MenuIcon from '@mui/icons-material/Menu';

export default function Banner() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  return (
    <header className="Header">
      <img src={Logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">FALCON 9</a>
          <a href="/">FALCON HEAVY</a>
          <a href="/">DRAGON</a>
          <a href="/">STARSHIP</a>
          <a href="/">HUMAN SPACEFLIGHT</a>
          <a href="/">RIDESHARE</a>
          <a href="/">STARLINK</a>
          <a href="/" className='shop'>SHOP</a>
          <a href="/" className='menu'><MenuIcon/></a>
        </nav>
      </CSSTransition>
    </header>
  );
}