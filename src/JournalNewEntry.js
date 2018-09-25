import React from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import JournalEditAdd from './JournalEditAdd';

var stream = '';

class JournalNewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
           
        }
    }   
    
   
    recordSpeech = (typeRec) => {        
        console.log("From Main one " + typeRec);
        

        fetch('https://boiling-wave-24205.herokuapp.com/api/speech-to-text/token')
            .then(function(response) {
                return response.text();
            }).then((token) => {
                
                stream = recognizeMic({
                    token: token,
                    objectMode: true, // send objects instead of text
                    extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
                    format: true // optional - performs basic formatting on the results such as capitals an periods
                });
                document.getElementById("feedback").innerHTML = "Please wait.....";

                stream.on('data', (data) => {
                    document.getElementById("feedback").innerHTML = "You may start speaking";
                    console.log(data);
                    
                    if (data.final) {
                        this.setState({
                            text: data.alternatives[0].transcript
                        })
                        if (typeRec === 'recordEntry') {                                          
                            console.log("In Record Entry" + typeRec);
                            document.getElementById("feedback").innerHTML = "Recording Entry";
                            document.getElementById('entry').value += this.state.text;                            
                        }
                        else if (typeRec === 'recordTopic') {                            
                            console.log("In recored Topic" + typeRec);
                            document.getElementById("feedback").innerHTML = "Recording Topic";
                            document.getElementById('topic').value += this.state.text;                            
                        }                              
                    }
                    else {
                        this.setState({
                            tempText: data.alternatives[0].transcript
                        })
                    }
                });
                // document.querySelector('#stop').onclick = stream.stop.bind(stream);
            }).catch(function(error) {
                console.log(error);
            });
    }   
    
    onRecordTopic = (event) => {
        
        if (stream !== '')
        {            
            stream.stop();
        }    
            
        const typeRec = event.target.id;        
        this.recordSpeech(typeRec);
    }

    onRecordEntry = (event) => {       

        if (stream !== '')
        {         
            stream.stop();
        }    

        const typeRec = event.target.id;        
        this.recordSpeech(typeRec);
    }

    onStopRecording = () => {        
        if (stream !== '')
        {
            stream.stop();
            document.getElementById("feedback").innerHTML = "Recording Stopped";
            this.setState({tempText: ''})
        }    
        else {
            document.getElementById("feedback").innerHTML = "There is nothing to stop";
        }
        
    }
    
    
    render() {        
        return (
            <div>               
                <ul className="nav nav-pills nav-pills-primary">
                    <li className="nav-item">
                        <a id = "recordTopic" className="nav-link" data-toggle="tab" onClick={this.onRecordTopic}>Record Topic</a>
                    </li>
                    <li className="nav-item">
                        <a id = "recordEntry" className="nav-link" data-toggle="tab" onClick={this.onRecordEntry}>Record Entry</a>
                    </li>
                    <li className="nav-item">
                        <a id="stop" className="nav-link" data-toggle="tab" onClick={this.onStopRecording}>Stop Recording</a>
                    </li>                        
                </ul>
                <br />
                
                <div id = "feedback"></div>
                <br />
                <br/>
                <JournalEditAdd entrydate={new Date()} username={sessionStorage.getItem("user")}></JournalEditAdd>       
                <div>{this.state.tempText}</div>
            </div>
        );
    }
}    

export default JournalNewEntry;