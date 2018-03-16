import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntryList = ({entries}) => {    
    return(
        <div>
            {
                entries.map((entry, i) => {
                    return <JournalEntry 
                        key={i}
                        username={entry.username}
                        entrydate={entry.entrydate}
                        topic={entry.topic}
                        entry={entry.entry}/>
                })    
            }
        </div>
    )
}

export default JournalEntryList;
