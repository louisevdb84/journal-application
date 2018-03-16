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

    onListenClick() {

        fetch('https://boiling-wave-24205.herokuapp.com/api/speech-to-text/token')
          .then(function(response) {
              return response.text();
          }).then((token) => {
            console.log('token is', token)
            var stream = recognizeMic({
                token: token,
                objectMode: true, // send objects instead of text
                extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
                format: false // optional - performs basic formatting on the results such as capitals an periods
            });
            stream.on('data', (data) => {
              this.setState({
                text: data.alternatives[0].transcript
              })
            });
            stream.on('error', function(err) {
                console.log(err);
            });
            document.querySelector('#stop').onclick = stream.stop.bind(stream);
          }).catch(function(error) {
              console.log(error);
          });
      }

 
 
    render() {       
      
    return (
        <div> 
            {this.state.username && this.state.username === sessionStorage.getItem("user") ?
                <div>
                    <JournalNav username={this.state.username}></JournalNav>  
                    <h1>New Entry</h1>                    
                    <button onClick={this.onListenClick.bind(this)}>Listen to microphone</button>                    
                    <JournalNewEntry username={this.state.username} onSubmitJournal={this.onSubmitJournal}> </JournalNewEntry>
                    <div style={{ fontSize: '40px' }}>{this.state.text}</div>                                
                   
                </div>    
                
                :  <SignIn></SignIn> 
            }    
            
        </div>    
    );
  }
}

export default Journal;