import React from 'react';
import logo from "../assets/img/logo.png"

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        
        <button className="header-button"><p>CONNECT WALLET</p></button>
    </header>
  );
};

export default Header; 
