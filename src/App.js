import React, { Component } from 'react';
import './App.css';

import { UISref } from '@uirouter/react';
import Signin from './SignIn';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    sessionStorage.setItem("user", "");
  }

  render() {

    return (
      <div>
        <Signin></Signin>
        <div className="" style={{ color: "red" }}>
          <br />
          <div className="container">
            <p>Please note that the speech to text functionality does not work anymore because my free subscription expired</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

