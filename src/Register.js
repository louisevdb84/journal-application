import React from 'react';

import { UISref } from '@uirouter/react';
import { router } from './router.config';

class Register extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      user: {}      
    }
  }

  onSubmitSignIn = () => {
    fetch('https://boiling-wave-24205.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      })
    })
      .then(response => response.json())
      .then(user => {
        
        if (user.id) {
          this.setState({ user: user });    
          sessionStorage.setItem("user", this.state.user.username);
          router.stateService.go('journal', { username: this.state.user.username });          
        }
        else {
          alert(user);
        }
      })
  }

  render() {    
    return (

      <div className = "container">      
          <h1 className="heading">Register</h1>
          <div class="form-group">
          <label for="username">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
            <div class="form-control-feedback"></div>  
          </div>
          <div class="form-group">
          <label for="surname">Surname</label>
            <input type="text" class="form-control" id="surname" placeholder="Enter surname" />
            <div class="form-control-feedback"></div>  
        </div>  
        <div class="form-group">
          <label for="username">User Name</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" />
            <div class="form-control-feedback"></div>  
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" />
        </div>
        <div className = "submit">  
            <button onClick={this.onSubmitSignIn} value="Register" type="submit" class="btn btn-primary">Submit</button>
            
          </div>        
          <br/>
        <UISref to="signin"><a className="login_Register">Sign In</a></UISref>          
        <UISref to="home"><a className="login_Register">Home</a></UISref>  
      </div>
    );
  }
}

export default Register;