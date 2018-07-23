import React from 'react';

const Header = (props) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">{props.text}</h1>
    </header>
  </div>
);

export default Header;
