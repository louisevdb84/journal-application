import React from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import JournalEditAdd from './JournalEditAdd';

class JournalNewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }    

    onListenClick() {

        fetch('https://boiling-wave-24205.herokuapp.com/api/speech-to-text/token')
          .then(function(response) {
              return response.text();
          }).then((token) => {            
            var stream = recognizeMic({
                token: token,
                objectMode: true, // send objects instead of text
                extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
                format: false // optional - performs basic formatting on the results such as capitals an periods
            });
              stream.on('data', (data) => {
                  console.log(data);
              this.setState({
                text: data.alternatives[0].transcript
                })
                document.getElementById("entry").value += this.state.text;    
                
            });
            stream.on('error', function(err) {
                console.log(err);
              });
              console.log(this.state.text);
            document.querySelector('#stop').onclick = stream.stop.bind(stream);
          }).catch(function(error) {
              console.log(error);
          });
      }
    
    render() {        
        return (
            <div>               
                <ul class="nav nav-pills nav-pills-primary">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" onClick={this.onListenClick.bind(this)}>Record Entry</a>
                    </li>
                    <li class="nav-item">
                        <a id="stop" class="nav-link" data-toggle="tab" onClick={this.onListenClick.bind(this)}>Stop</a>
                    </li>                        
                </ul>

                <br />
                <br/>
                <JournalEditAdd entrydate={new Date()} username={sessionStorage.getItem("user")}></JournalEditAdd>            
            </div>
        );
    }
}    

export default JournalNewEntry;