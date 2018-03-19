import React from 'react';

class JournalEditAdd extends React.Component {    

    componentDidMount(){
        document.getElementById("entrydate").valueAsDate = new Date(this.props.entrydate);
    }

    onSubmitJournal = () => {
        fetch('https://boiling-wave-24205.herokuapp.com/journal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                entrydate: document.getElementById("entrydate").value,
                topic: document.getElementById("topic").value,
                entry: document.getElementById("entry").value,
                username: this.props.username,
                id : this.props.id
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
            <div>              
            
                    <div className="form-group">
                        <label htmlFor="entrydate"> Entry Date</label>
                        <input type='date' className="form-control" name="entrydate" id="entrydate" />
                        <div className="form-control-feedback"></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input defaultValue={this.props.topic} type="text" className="form-control" id="topic" name="topic" placeholder="Topic" />
                        <div className="form-control-feedback"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="entry">Entry</label>
                        <textarea defaultValue={this.props.entry} type="text" className="form-control" rows="10" id="entry" name="entry" placeholder="Type or press Record Entry to speak" />
                        <div className="form-control-feedback"></div>
                    </div>
                    <div className="submit">
                        <button onClick={this.onSubmitJournal} type="submit" value="Accept" className="btn btn-primary">Submit</button>
                    </div>      
            </div>
            
            
        );
    }
}    

export default JournalEditAdd;