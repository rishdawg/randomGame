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
    if(this.state.mode === 'connected'){
      return(
            <Loggedin/>
      );
    }
    else{
        return(
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
        )
    }
  }
}

export default App;
