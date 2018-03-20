import React from 'react';

const JournalSearch = ({searchString, searchChange}) => {    
    return (
        <div className='row'>           
            <div className='col-md-2 col-sm-4'>
            <label>Search topic & entry</label>
        </div>        
        <div className = 'col-md-5 col-sm-8'>    
            <div className ='form-group'>
                <input 
                    className='form-control' 
                    type="search" 
                    placeholder="Search Entries"
                    onChange = {searchChange}/>
                </div>               
            </div>    
            <div className='col-md-2 col-sm-4'>
            <label>Search date</label>
        </div>        
            <div className='col-md-3 col-sm-8'>
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