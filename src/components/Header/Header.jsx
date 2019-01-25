import React from 'react';
import logo from './logo.svg';

const Header = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.text}</h1>
    </header>
  </div>
);

export default Header;
