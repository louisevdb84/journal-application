import React from 'react';

import JournalEditAdd from './JournalEditAdd';
import JournalNav from './JournalNav';
import JournalDisplay from './JournalDisplay';
import SignIn from './SignIn';




class JournalNewEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: sessionStorage.getItem("user")
        }
    }       
    
    render() {        
        if (this.props.$stateParams.entry) {
            const { username, topic, entrydate, entry,id } = this.props.$stateParams.entry;
        
        
            return (
                this.state.username ?
                    <div className="container entryContainer">
                        {this.state.username && this.state.username === sessionStorage.getItem("user") ?
                            <div>
                                <JournalNav username={this.state.username}></JournalNav>
                                <h1>Edit</h1>
                                <br />
                                <div>
                                    <form>
                                        <JournalEditAdd id={id.id} username={username.username} topic={topic.topic} entrydate={entrydate.entrydate} entry={entry.entry}></JournalEditAdd>
                                    </form>
                                </div>
                            </div>
                
                            : <SignIn></SignIn>
                        }
            
                    </div>
                    : <SignIn></SignIn>
        
            );
        }
        else {
            return <JournalDisplay username={sessionStorage.getItem("user")}></JournalDisplay>;
        }
    }    
 
}    

export default JournalNewEntry;