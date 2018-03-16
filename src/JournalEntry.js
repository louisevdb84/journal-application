import React from 'react';

const JournalEntry = ({username, entrydate, topic, entry}) => {    
    return (
        <div className = ''>
            
            <div>
                <h5>{username}</h5>
                <p>{topic}</p>
                <p>{entrydate}</p>                
                <p>{entry}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>    
    );
}

export default JournalEntry;