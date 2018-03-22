import React from 'react';

import { UISref, UISrefActive} from '@uirouter/react';

const JournalNav = ({ username }) => {    
    
    return (
        
            <nav className="navbar navbar-expand-lg navbar-transparent" color-on-scroll="500">
            <div className="container">     
            <div className="navbar-translate">    
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                </button>
            </div>
                
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <UISrefActive class = "active"><UISref to="home" className="nav-link"><a href="">Home<span className="sr-only">(current)</span></a></UISref></UISrefActive>
                        </li>    
                        <li className="nav-item">
                            <UISrefActive class = "active"><UISref to="journal" params={{ username: username }} className="nav-link"><a href="">Journal Entry<span className="sr-only">(current)</span></a></UISref></UISrefActive>
                        </li>
                        <li className="nav-item">
                            <UISrefActive class = "active"><UISref to="display" params={{ username: username }}  className="nav-link"><a href="">Display Entries</a></UISref></UISrefActive>
                        </li>   
                        
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className = "nav-item">
                            <a className="nav-link static">Signed in as {username} </a>
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