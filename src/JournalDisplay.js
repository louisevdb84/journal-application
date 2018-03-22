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
      }    

    }    

    getJournalEntries = (searchString = "", searchDate = "") => {
        console.log("Searchdate", searchDate);
        fetch('https://boiling-wave-24205.herokuapp.com/getjournal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                searchString: searchString,
                searchDate: searchDate
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
        this.getJournalEntries(event.target.value);
        document.getElementById("searchInputDate").value = "";        
    }

    searchDateChange = (event) => {            
        this.getJournalEntries("", event.target.value);
        document.getElementById("searchInput").value = "";
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
                    <div className="navImage">        
                            <JournalNav username={this.state.username}></JournalNav>                                
                        </div>    
                        <h1 className= "heading">Display Entries</h1> 
                        <JournalSearch searchChange={this.searchChange} searchDateChange={this.searchDateChange}></JournalSearch>    
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