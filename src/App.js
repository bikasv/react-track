import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Test from './Test.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };

    this.show = this.show.bind(this);
  }

  show () {
    this.setState({
      show: !this.state.show
    });
  }

  sayHi() {
    alert('Hi');
  }

  render() {
    return (
      <div className="App">
        <Header text='Full Stack' />
        {this.state.show ?
          <Test /> :
          null
        }

        <button onClick={this.show}>Show</button>
        <button onClick={this.sayHi}>Hi</button>
      </div>
    );
  }
}

export default App;
