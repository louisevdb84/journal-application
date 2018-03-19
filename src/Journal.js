import React from 'react';
import JournalNewEntry from './JournalNewEntry';
import SignIn from './SignIn';
import JournalNav from './JournalNav';

class Journal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          journalEntries: [],
          username: this.props.$stateParams.username
      }    
    }    

   
 
    render() {       
      
    return (
        <div className = "container entryContainer"> 

            
            {this.state.username && this.state.username === sessionStorage.getItem("user") ?
                <div>
                    <JournalNav username={this.state.username}></JournalNav>  
                    <h1>New Entry</h1>   
                    <br/>                    
                    <JournalNewEntry username={this.state.username}> </JournalNewEntry>
                </div>    
                
                :  <SignIn></SignIn> 
            }    
            
        </div>    
    );
  }
}

export default Journal;