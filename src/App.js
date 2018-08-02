import React, { Component } from 'react';
import './App.css';
import {Header, Test, Addition} from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'React Session'
    };
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state} />
        <Addition />
        <Test />
      </div>
    );
  }
}

export default App;
