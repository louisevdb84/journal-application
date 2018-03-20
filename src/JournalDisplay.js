import React from 'react';
import JournalEntryList from './JournalEntryList';
import SignIn from './SignIn';
import JournalNav from './JournalNav';
import JournalSearch from './JournalSearch';

class JournalDisplay extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          journalEntries: [],
          username: sessionStorage.getItem("user"),
          searchString: '',
          searchDate: ''
      }    

    }    

    getJournalEntries = (searchString = "") => {
        fetch('https://boiling-wave-24205.herokuapp.com/getjournal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                searchString: searchString,
                searchDate: this.state.searchDate
            })
        })
        .then(response => response.json())
            .then(entry => {                 
                if (entry.length)
                {
                    this.setState({
                        journalEntries: entry
                    })    
                }    
                else {
                    alert(entry);
                }
                
            })                    
    }

    searchChange = (event) => {                
        this.setState({ searchString: event.target.value });        
        this.getJournalEntries(event.target.value);
    }

    sortDates = function (arrays) {
        arrays.sort(function (a, b) {  
        return new Date(b.entrydate) - new Date(a.entrydate);
           
        });
    }
    

    componentDidMount() {
        this.getJournalEntries();
    }

 
    render() {       
        if (this.state.journalEntries.length && this.state.journalEntries.constructor === Array)
        {            
            this.sortDates(this.state.journalEntries);                        
        }    
        
        return (
        <div className = "container entryContainer">             
            {this.state.username && this.state.username === sessionStorage.getItem("user")?
                <div>
                        <JournalNav username={this.state.username}></JournalNav>    
                        <h1 className= "heading">Display Entries</h1> 
                        <JournalSearch searchString={this.state.searchString} searchChange={this.searchChange}></JournalSearch>    
                        <br />
                        <br/>
                    {this.state.journalEntries.constructor === Array ?
                        <div>                            
                            <JournalEntryList entries={this.state.journalEntries}></JournalEntryList>                        
                        </div>    
                        :
                        <div>No journal entries captured</div>
                    }    
                    </div>    
                
                :  <SignIn></SignIn>
            }    
            
        </div>    
    );
  }
}

export default JournalDisplay;