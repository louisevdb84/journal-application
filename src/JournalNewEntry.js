import React from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

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
                document.getElementById("topic").value = this.state.text;  
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
                <form>
                    <button class = "btn btn-primary btn-round btn-lg" onClick={this.onListenClick.bind(this)}>Listen to microphone</button>  
                    
              
                    <br />        
                    <br />
                    <br/>
              <div class="form-group">
                        <label for="entrydate" Entry Date></label>
                        <div class='input-group date' id='datetimepicker'>        
                  <input type='text' class="form-control datetimepicker" name="entrydate" id="entrydate" placeholder="Pick entry date" />
                  <div class="form-control-feedback"></div>  
                    </div>
                </div>

              <div class="form-group">
                <label for="topic">Topic</label>
                <input type="text" class="form-control" id="topic" name="topic" placeholder="Topic" />
                <div class="form-control-feedback"></div>         
                </div>
                <div class="form-group">
                    <label for="entry">Entry</label>
                    <textarea type="text" class="form-control" rows = "10" id="entry" name="entry" placeholder="Type or speak" />
                    <div class="form-control-feedback"></div>         
                  </div>      
              <div className = "submit">  
                  <button onClick={this.props.onSubmitJournal} type="submit" value="Accept" class="btn btn-primary">Submit</button>                  
                </div>                        
            </form>
            </div>
        );
    }
}    

export default JournalNewEntry;