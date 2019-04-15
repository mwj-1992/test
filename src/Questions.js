import React, {Component} from 'react';
import $ from 'jquery';
class FirstQuestion extends React.Component {
   
   locked=false;
  constructor(props) {
    super(props);
    this.state = {
      player_count:'',result:[],msg:false
    };
  }
  
  _handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  componentDidMount() {
  }

  _submit = (e)=>{
    e.preventDefault();
    if(this.locked){ //Check if lock is empty 
    }
    this.locked = true;
    if(!$('form')[0].checkValidity()){
        alert('Fill All requried fields please');
    }
      $.ajax({
          method:"POST",
          url:window.API+'index.php/api/distribute',
          data:this.state,
          datatype:'JSON',
          success:(res)=>{
            this.locked=false; //Free Lock
            
          this.setState({'result':res,msg:false},()=>{
            // console.log(this.state.result);
          });
          },
          error:(res)=>{
            this.locked=false; //Free Lock
            this.setState({msg:res.responseJSON.msg,result:[]});
          }
        })
  }


  render() {
    return (
      <form onSubmit= {this._submit} className="mx-auto col-12 col-md-6 col-xl-4 col-sm-10">
        <h5>In this form you can enter number of player, by submit the form the system will send API request to the backend code, and the server will distribute cards to each player</h5>
         <input className="w-100 text-center"
          type="text"
          onChange={this._handleChange}
          value={this.state.player_count} title="Enter Number bigger than 0"
          name="player_count" 
          required
          placeholder="Player Count"/>
          <small>For  test try: (any character,zero, negative number,positive number) </small>
            <button style={{ display: 'block', height: "100%" }} type="submit" className="btn back mx-auto  mt-4 mb-3">Submit</button>
            { 
              this.state.msg &&<div class="alert alert-danger col-12" role="alert">
                 {this.state.msg}
                </div>
             }
            {
              this.state.result && this.state.result.map((e,index)=>{
              return (  
                <ul> Player Number[{index+1}]: 
                 <li>{e.toString()}</li>
              </ul>
              )}
              )
            }
      </form>
    )
  }
}

const SecondQuestion = ()=>{
  return (
    <div  className="mx-auto col-12 col-md-6 col-xl-4 col-sm-10 ">
    <h5>To enhance the performance of this query i suggest</h5>
    <ul className="pl-2 mt-2">
      <li> Reducing limit number to be between <br/>[7-10]</li>
      <li>Ordering Only by Jobs.id and remove ordering by Jobs.sort_order</li>
</ul>
    </div>
  )
}

const Documentation = ()=>{
  return (
    <div  className="mx-auto col-12 col-md-6 col-xl-4 col-sm-10 ">
    <h5>Demonstration:</h5>
    <ul className="pl-2 mt-2">
      <li> Used techniques: Front-end(ReactJS,HTML,CSS,JQueyr)</li>
      <li> Used techniques: Back-end(PHP- Codeigniter Framework)</li>
      
      <li>In first Question i followed MVC Design pattern,<br/> After   inserting  and submitting player count,  
        the front end code will send a request to the server as a POST Request, and the backend code will handle this request and will 
        check the player number (should be positive and more than zero and numeric).<br/>
        Incase the number doesn't match so the system will send 
        alert to the client.<br/>
        Incase the input is correct the backend code will distribute the playing card on the player count, and will send the result to the frontend 
        in a response.
        <br/>
        The frontend code(ReactJs) will render this response on the screen.
      </li>
</ul>
    </div>
  )
}

export {FirstQuestion,SecondQuestion,Documentation};