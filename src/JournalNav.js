import React from 'react';

import { UISref} from '@uirouter/react';

const JournalNav = ({ username }) => {    
    
    return (
        
            <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark" color-on-scroll="500">
            <div className="container">     
            <div class="navbar-translate">    
                <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                        <span class="navbar-toggler-bar"></span>
                </button>
            </div>
                
                    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <div className = "nav-link"><UISref to="journal" params={{ username: username }}><a >Add Journal Entries<span class="sr-only">(current)</span></a></UISref></div>
                        </li>
                        <li class="nav-item">
                        <div className = "nav-link"><UISref to="display" params={{ username: username }}><a>Display Journal Entries</a></UISref></div>
                        </li>   
                        
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li className = "nav-item">
                            <a className="nav-link">Signed in as {username} </a>
                            </li>                        
                            <li className = "nav-item">
                                <UISref to="home"><a className="nav-link">Sign Out</a></UISref>           
                            </li>
                        
                     </ul>   
                </div>
            </div>
                
         </nav>
         
    );
}

export default JournalNav;