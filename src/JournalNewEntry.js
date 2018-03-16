import React from 'react';


class JournalNewEntry extends React.Component {
    
   

    render() {
        return (
            <div className=''>
                <div className="">
                    <fieldset id="NewEntry" className="">
                        <legend className="">New Entry</legend>
                        <div className="">
                            <label className="" htmlFor="entrydate">Entry Date</label>
                            <input className="" type="date" name="entrydate" id="entrydate" />
                        </div>
                        <div className="">
                            <label className="" htmlFor="topic">Topic</label>
                            <input className="" type="text" name="topic" id="topic" />
                        </div>
                        <div className="">
                            <label className="" htmlFor="entry">Entry</label>
                            <textarea className="" type="text" name="entry" id="entry" />
                        </div>
            
                    </fieldset>
                    <div className="">
                        <input
                            onClick={this.props.onSubmitJournal}
                            type="submit"
                            value="Accept"
                        />
                    </div>
                </div>
            </div>
        );
    }
}    

export default JournalNewEntry;