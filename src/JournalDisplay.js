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
          username: this.props.$stateParams.username,
          searchField: ''
      }    

    }    

    getJournalEntries = () => {
        var url = 'https://boiling-wave-24205.herokuapp.com/getjournal/' + this.state.username ;        
        fetch(url)
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

    componentDidMount() {
        this.getJournalEntries();
    }

 
    render() {       
      
    return (
        <div className = "container entryContainer">             
            {this.state.username && this.state.username === sessionStorage.getItem("user")?
                <div>
                    <JournalNav username={this.state.username}></JournalNav>    
                    {this.state.journalEntries.constructor === Array ?
                        <div>
                            <JournalSearch></JournalSearch>
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