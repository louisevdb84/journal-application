import React from 'react';
import { UISref} from '@uirouter/react';

const JournalEntry = ({ username, entrydate, topic, entry, id }) => {   
    function onDelete(){
        fetch('https://boiling-wave-24205.herokuapp.com/delete', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id : id
            })
        })
            .then(response => response.json())
            .then(entry => {
                if (entry.id) {
                    document.location.reload();    
                }
                else {
                    alert(entry);
                }
            })
        
   
    }
    entrydate = (new Date(entrydate)).toDateString();

    return (
        
        <div className = ''>
            
            <div>
                <div className="card" style={{ width: "100%" }}>
                <div className="card-body">
                    <h5 className="card-title">{topic}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{entrydate}</h6>
                        <p className="card-text">{entry}</p>
                        <div className="editDeleteBtn">
                        <UISref to="edit" params={{ entry: { id: { id }, entrydate: { entrydate }, username: { username }, topic: { topic }, entry: { entry } } }} className="btn btn-primary btn-sm"><a>Edit</a></UISref>
                        <a className="btn btn-primary btn-sm" onClick={onDelete} href="">Delete</a>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>    
    );
}

export default JournalEntry;