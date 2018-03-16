import React from 'react';

import { UISref} from '@uirouter/react';

const JournalNav = ({ username }) => {    
    
    return (
        <div className=''>
            <p>Signed in as {username} </p>  
            
            <UISref to="journal" params={{ username: username }}><a className="nav-link">Add Journal Entries</a></UISref>                
            <UISref to="display" params={{ username: username }}><a className="nav-link">Display Journal Entries</a></UISref>            
            <UISref to="home"><a className="nav-link">Sign Out</a></UISref>                
       
        </div>    
    );
}

export default JournalNav;