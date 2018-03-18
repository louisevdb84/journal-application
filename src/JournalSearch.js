import React from 'react';

const JournalSearch = ({searchField, searchChange}) => {    
    return (
        <div className='row'>
        <div className = 'col-md-6'>    
            <div className ='form-group'>
                <input 
                    className='form-control' 
                    type="search" 
                    placeholder="Search Entries"
                    onChange = {searchChange}/>
                </div>               
            </div>    
            <div className='col-md-6'>
                <div className ='form-group'>
                <input 
                    className='form-control' 
                    type="date" 
                    placeholder="Display by date"
                    onChange = {searchChange}/>
                </div>    
            </div>    
        </div>        
    );
}

export default JournalSearch;