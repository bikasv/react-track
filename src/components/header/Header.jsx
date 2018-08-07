import React from 'react';

const Header = (props) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">
        {props.text}
        <a
          className="anchor"
          href={props.url ? props.url : '#/user'}
        >
          {props.anchorName ? props.anchorName : 'Users'}
        </a>
      </h1>
    </header>
  </div>
);

export default Header;
