import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';

export default class Log extends Component {
  handleResponse = (data) => {
    console.log(data);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render(){
    return(
      <FacebookProvider appId='146263099444217'>
        <Login
          scope = 'email'
          onResponse = {this.handleResponse}
          onError = {this.handleError}
        >
          <span> Login via Facebook </span>
        </Login>
      </FacebookProvider>
    )
  }
}
