import React from 'react';

const JournalEntry = ({username, entrydate, topic, entry}) => {    
    return (
        <div className = ''>
            
            <div>
                <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                    <h5 class="card-title">{topic}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{entrydate}</h6>
                    <p class="card-text">{entry}</p>
                    <a href="" class="card-link">Edit</a>
                    <a href="" class="card-link">Delete</a>
                </div>
            </div>
            </div>
        </div>    
    );
}

export default JournalEntry;