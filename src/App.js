import React, { Component } from 'react';
import './App.css';

import { UISref } from '@uirouter/react';

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
        <div className="App">
        <nav class="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
        <div class="container">
              <div class="navbar-translate">
                  <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar"></span>
                    <span class="navbar-toggler-bar"></span>
                    <span class="navbar-toggler-bar"></span>
                </button>                  
              </div>
                <div class="collapse navbar-collapse" id="navbarToggler">
                        <ul class="navbar-nav ml-auto">       
                        <li class="nav-item">
                        <a class="nav-link" rel="tooltip noopener noreferrer" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" >
                            <i class="fa fa-twitter"></i>
                            <p class="d-lg-none">Twitter</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip noopener noreferrer" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                            <i class="fa fa-facebook-square"></i>
                            <p class="d-lg-none">Facebook</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip noopener noreferrer" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                            <i class="fa fa-instagram"></i>
                            <p class="d-lg-none">Instagram</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip noopener noreferrer" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/CreativeTimOfficial/paper-kit" target="_blank">
                            <i class="fa fa-github"></i>
                            <p class="d-lg-none">GitHub</p>
                        </a>
                    </li>        
                            <li class="nav-item">                            
                            <UISref to="register"><a className="nav-link" data-placement="bottom">Register</a></UISref>                            
                            </li>
                            <li class="nav-item">                            
                            <UISref to="signin"><a className="nav-link" data-placement="bottom">Sign In</a></UISref>                  
                            </li>
                            
                    </ul>
                </div>
            </div>
    </nav>
    
    <div class="wrapper">
          <div class="page-header section-dark">
            <div class="filter"></div>
            <div class="content-center">
              
              
                <div class="container">
                  <div class="title-brand">
                    <h1 class="presentation-title">Journal</h1>
                    
                </div>
                            <h2 class="presentation-subtitle text-center">This app uses speech recognition to convert your words into a journal entry. Designed for Chrome and MS Edge and may not work on other browsers.</h2>                            
                            <br />
                            <br/>          
                            <UISref to="signin"><button className="btn btn-round btn-lg">Continue</button></UISref>
              
              
              </div>              
              </div>            
          </div>
          </div>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <nav class="footer-nav">
                    <ul>
                        <li><a href="https://www.creative-tim.com" rel = "noopener noreferrer" target="_blank">Creative Tim</a></li>
                        <li><a href="https://blog.creative-tim.com" rel = "noopener noreferrer" target="_blank">Blog</a></li>
                        <li><a href="https://www.creative-tim.com/license" rel = "noopener noreferrer" target="_blank">Licenses</a></li>
                    </ul>
                </nav>
                <div class="credits ml-auto">
                    <span class="copyright" >
                  © {new Date().getFullYear()}, made with <i class="fa fa-heart heart"></i> by <a href="https://www.creative-tim.com" target="_blank " rel = "noopener noreferrer"> Creative Tim </a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default App;

