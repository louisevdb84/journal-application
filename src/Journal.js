import React from 'react';
import JournalNewEntry from './JournalNewEntry';
import SignIn from './SignIn';
import JournalNav from './JournalNav';

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class Journal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          journalEntries: [],
          username: this.props.$stateParams.username
      }    
    }    

    onSubmitJournal = () => {
        fetch('https://boiling-wave-24205.herokuapp.com/journal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                entrydate: document.getElementById("entrydate").value,
                topic: document.getElementById("topic").value,
                entry: document.getElementById("entry").value,
                username: this.state.username
            })
        })
            .then(response => response.json())
            .then(entry => {
            
                if (entry.id) {
                    alert(entry.topic);
                }
                else {
                    alert(entry);
                }
            })
            .catch(err=> console.log(err));
        document.getElementById("entrydate").value = '';
        document.getElementById("topic").value = '';
        document.getElementById("entry").value = '';        
    }
 
    render() {       
      
    return (
        <div className = "container entryContainer"> 

            
            {this.state.username && this.state.username === sessionStorage.getItem("user") ?
                <div>
                    <JournalNav username={this.state.username}></JournalNav>  
                    <h1>New Entry</h1>   
                    <br/>                    
                    <JournalNewEntry username={this.state.username} onSubmitJournal={this.onSubmitJournal}> </JournalNewEntry>
                </div>    
                
                :  <SignIn></SignIn> 
            }    
            
        </div>    
    );
  }
}

export default Journal;