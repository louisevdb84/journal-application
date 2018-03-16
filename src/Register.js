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
      <div className="">       
          <main className="">
            <div className="">
              <fieldset id="sign_up" className="">
                <legend className="">Register</legend>
                <div className="">
                  <label className="" htmlFor="name">Name</label>
                  <input className="" type="text" name="name" id="name" />
                </div>
                <div className="">
                  <label className="" htmlFor="surname">Surname</label>
                  <input className="" type="text" name="surname" id="surname" />
                </div>
                <div className="">
                  <label className="" htmlFor="username">User Name</label>
                  <input className="" type="text" name="username" id="username" />
                </div>
                <div className="">
                  <label className="" htmlFor="password">Password</label>
                  <input className="" type="password" name="password" id="password" />
                </div>
              
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
                  className=""
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
            <UISref to="signin"><a className="nav-link" data-placement="bottom">Sign In</a></UISref>
          </main>   
        } 
      </div>
    );
  }
}

export default Register;