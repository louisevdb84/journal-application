import React from 'react';

import { router } from './router.config';
import { UISref} from '@uirouter/react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }

  }

  onSubmitSignIn = () => {
    fetch('https://boiling-wave-24205.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      })
    })
      
      .then(response => response.json())
      .then(user => {
        console.log('asd');
        if (user.id) {
          this.setState({ user: user });
          sessionStorage.setItem("user", this.state.user.username);
          router.stateService.go('journal', { username: this.state.user.username });
        }
        else {
          document.querySelector('.form-control-feedback').innerHTML = user;          
        }
      })
  }

  render() {
    return (
      <div className = "container">
      
        <h1 className="heading">Sign In</h1>        

        <div class="form-group">
        
          <label for="username">User Name</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" required/>
                  
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" required />
          <div class="form-control-feedback"></div>    
        </div>
        <br/>
        <div className = "submit">  
            <button onClick={this.onSubmitSignIn} value="Signin" type="submit" class="btn btn-primary">Submit</button>
            
          </div>        
          <br/>
        <UISref to="register"><a className="login_Register">Register</a></UISref>    
        <UISref to="home"><a className="login_Register">Home</a></UISref>    
      
    </div>
    )
  }
}  

export default Signin;