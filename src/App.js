import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loggedin from './components/Loggedin';
import Log from './components/Log';

const FB = window.FB;

class App extends Component {
  constructor(props){
    super(props);
    this.state = { mode: undefined } ;
  }
   setloginstatus(response){
     this.setState({mode: response.status})
   }
  componentWillMount() {
    FB.getLoginStatus(this.setloginstatus.bind(this));
  }
  render() {
    if(this.state.mode === 'connected '){
      return(
            <Loggedin/>
      );
    }
    else{
        return(
          <Log/>
        )
    }
  }
}

export default App;
