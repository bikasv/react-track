import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Test from './Test.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      text: 'Full Stack'
    };

    this.xyz = {};

    this.show = this.show.bind(this);
    this.sayHi = this.sayHi.bind(this);

    console.log('Constructing');
  }

  componentWillMount() {
    console.log('Mounting');
  }

  componentDidMount = () => {
    console.log('Mounted');
  }


  show () {
    this.setState({
      show: !this.state.show
    }, function () {
      console.log('Second', this.state);
    });

    console.log('first', this.state);
  }

  sayHi() {
    this.setState({
      text: 'Hello, Full Stack'
    });
  }

  render() {
    console.log('Rendering');

    return (
      <div className="App">
        <Header {...this.state} />
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
