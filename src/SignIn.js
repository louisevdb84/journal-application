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
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
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
      <div >        
          <main className="">
            <div>
              <fieldset id="sign_up" className="">
                <legend className="">Signin</legend>
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
                  value="Signin"
                />
              </div>
            </div>
          <UISref to="register"><a className="nav-link">Register</a></UISref>
          </main>                                    
      </div>
    );
  }
}

export default Signin;