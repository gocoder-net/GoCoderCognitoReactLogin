import React, { Component, useState } from 'react';
import Signup from './Signup'
import Signin from './Signin'
import UserStatus from './UserStatus'
import Test from './Test'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: ''
    };
  }

  render() {
    return (
      <div className="App">
        <Signup />
        <hr />
        <Signin />
        <hr />
        <UserStatus />
        <hr />
        <Test />

      </div>
    );
  }
}

export default App;
