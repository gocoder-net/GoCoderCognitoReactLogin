import React, { Component } from "react";
import { getCurrentUser, getUsername } from "./Cognito";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }

  componentDidMount() {    
    getCurrentUser((attributes) => {      
      getUsername((username) => {
        this.setState({ userName: username });
      });
    });
  }

  render() {
    return <div>{this.state.userName}</div>;
  }
}

export default Test;
