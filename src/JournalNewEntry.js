import React from 'react';


class JournalNewEntry extends React.Component {
    
   

    render() {
        return (


            <div>
                <form>
                    <br />        
                    <br />
                    <br/>
              <div class="form-group">
                        <label for="entrydate" Entry Date></label>
                        <div class='input-group date' id='datetimepicker'>        
                  <input type='text' class="form-control datetimepicker" name="entrydate" id="entrydate" placeholder="Pick entry date" />
                  <div class="form-control-feedback"></div>  
                    </div>
                    </div>
                    
                  


              <div class="form-group">
                <label for="topic">Topic</label>
                <input type="text" class="form-control" id="topic" name="topic" placeholder="Topic" />
                <div class="form-control-feedback"></div>         
                </div>
                <div class="form-group">
                    <label for="entry">Entry</label>
                    <textarea type="text" class="form-control" rows = "10" id="entry" name="entry" placeholder="Type or speak" />
                    <div class="form-control-feedback"></div>         
                  </div>      
              <div className = "submit">  
                  <button onClick={this.props.onSubmitJournal} type="submit" value="Accept" class="btn btn-primary">Submit</button>                  
                </div>                        
            </form>
            </div>
        );
    }
}    

export default JournalNewEntry;