import React, { Component } from 'react';
import './App.css';
import {Header, Test, Addition} from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: null,
      history: [],
      text: 'React Session'
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(value) {
    const history = this.state.history;
    history.unshift(value);
    history.splice(3);

    this.setState({
      value,
      history
    });
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state} />
        <Addition onSubmit={this.onSubmit} />
        <Test
          value={this.state.value}
          history={this.state.history}
        />
      </div>
    );
  }
}

export default App;
