import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Log from './components/Log';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { mode: undefined } ;
  }
  componentWillMount() {
    FB.getLoginStatus(function(response) {
    this.setState({ mode: response.status})
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.mode}</p>
      </div>
    );
  }
}

export default App;
