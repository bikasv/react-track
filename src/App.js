import React, { Component } from 'react';
import './App.css';
import {Header, Test, Addition} from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: null,
      text: 'React Session'
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state} />
        <Addition onSubmit={this.onSubmit} />
        <Test value={this.state.value} />
      </div>
    );
  }
}

export default App;
