import React, {Component} from 'react';

class FirstStep extends React.Component {

  ninja_front_end_frameworks=['ReactJS','AngularJs','Bootstrap','Angular Material','HTML5','CSS','jQuery'];
  expert_front_end_frameworks=['LodashJS','D3'];
  php_frameworks=['Codeigniter','Laravel'];


  locked =false;

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: props.user.name || 'MHD WAEL AL JAZMATI',
        email: props.user.email || 'ite.mwj1992@gmail.com',
        education: props.user.education || "Bachelor's degree",
        gender:props.user.gender|| 'Male',
        age: props.user.age || '27',
        working_experience:props.user.working_experience||'over_than_4',
        linux_level:props.user.linux_level||'expert',
        windows_server:props.user.windows_server||'intermediate'   ,
        sql_database:props.user.sql_database||'expert'  ,
        nosql_database:props.user.nosql_database||'normal'    ,
        system_analysing:props.user.system_analysing||'expert'  ,
        front_end_level:props.user.front_end_level||'ninja',
        back_end_level:props.user.back_end_level||'ninja',    
        responsive_level:props.user.responsive_level||'ninja',    
        coding_refactoring:props.user.coding_refactoring||'expert',
        ninja_front_end_frameworks:props.user.ninja_front_end_frameworks||['ReactJS','AngularJs','Bootstrap','Angular Material','HTML5','CSS','jQuery'],
        expert_front_end_frameworks:props.user.expert_front_end_frameworks||['LodashJS','D3'],
        php_frameworks:props.user.php_frameworks||['Codeigniter','Laravel'],
        open_to_learn:props.user.open_to_learn||'yes',
        open_to_travel:props.user.open_to_travel||'yes'
      }
    };
  }
 


  checkbox_change = (e) => {
    var tmp = this.state.user[e.target.name];
    var local=this.state.user;
    if(!Array.isArray(tmp)) tmp =[tmp];
      var index = tmp.indexOf(e.target.value);
        if(index!=-1){
          tmp.splice(index,1);
        }else{
          tmp.push(e.target.value);
         
        }
    this.setState({user:{...local,[e.target.name]:tmp}},()=>{
      console.log(this.state.user);
    })  ;
  }
  
  _handleChange = (e) => {
    var tmp = this.state.user;
    tmp[e.target.name] = e.target.value;
    this.setState({user: tmp},()=>{

    });
  }
  
  print =(e)=>{
   window.print();
  }
  _submit = (e)=>{

  }

  componentDidMount(){
    // $('html,body').animate({'scrollTop':"0px"},1500);
  }  
  
  componentWillUnmount(e){
  }

  render() {
    return (
      
      [
      <form onSubmit={this._submit} className=" flex-column m-0 d-flex mx-auto col-sm-12 col-md-9 col-xl-6 col-12 mt-4 mb-4">
        <h5>Let me introduce my self</h5>
        <input
          type="text" className="mb-2"
          onChange={this._handleChange}
          value={this.state.user.name}
          name="fullName"
          required
          placeholder="Full Name"/>
        <input
          type="email"
          name="email"
          onChange={this._handleChange}
          value={this.state.user.email}
          required
          placeholder="Email"/>
        <h5>Age</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="age"
              value="25"
              checked={this.state.user.age == '25'}/>
            25
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="age"
              onChange={this._handleChange}
              value="26"
              checked={this.state.user.age == '26'}/>
            26
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              name="age"
              onChange={this._handleChange}
              value="27"
              checked={this.state.user.age == '27'}/>
           27
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              name="age"
              onChange={this._handleChange}
              value="28"
              checked={this.state.user.age == '28'} />
            28
          <span className="thirdCheckMark"></span>
          </label>
        </div>
       


        <h5>Gender</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="gender"
              value="Male"
              checked={this.state.user.gender == 'Male'}/>
            Male
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="gender"
              onChange={this._handleChange}
              value="Female"
              checked={this.state.user.gender == 'Female'}/>
            Female
          <span className="thirdCheckMark"></span>
          </label>
           </div>
       
      
        <h5>Education</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="education"
              value="Associate degree"
              onChange={this._handleChange}
              checked={this.state.user.education == 'Associate degree'}/>
            Associate degree
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="education"
              value="Bachelor's degree"
              onChange={this._handleChange}
              checked={this.state.user.education == "Bachelor's degree"}/>
            Bachelor's degree
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="education"
              value="Master's degree"
              onChange={this._handleChange}
              checked={this.state.user.education == "Master's degree"}/>
              Master's degree
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="education"
              value="Doctoral degree"
              onChange={this._handleChange}
              checked={this.state.user.education == 'Doctoral degree'}/>
            Doctoral degree
          <span className="thirdCheckMark"></span>
          </label>
        </div>

        <h5>Working Experience</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="working_experience"
              value="less_than_2"
              checked={this.state.user.working_experience == 'less_than_2'}/>
            Less Than two years
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="working_experience"
              onChange={this._handleChange}
              value="between_2_n_4"
              checked={this.state.user.working_experience == 'between_2_n_4'}/>
            Less Than Four years
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="working_experience"
              onChange={this._handleChange}
              value="over_than_4"
              checked={this.state.user.working_experience == 'over_than_4'}/>
            Over Than Four years
          <span className="thirdCheckMark"></span>
          </label>
           </div>
       
           <h5>Linux Server level</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="linux_level"
              value="intermediate"
              checked={this.state.user.linux_level == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="linux_level"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.linux_level == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="linux_level"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.linux_level == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="linux_level"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.linux_level == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>

           <h5>Windows Server level</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="windows_server"
              value="intermediate"
              checked={this.state.user.windows_server == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="windows_server"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.windows_server == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="windows_server"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.windows_server == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="windows_server"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.windows_server == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>


           <h5>SQL Database</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="sql_database"
              value="intermediate"
              checked={this.state.user.sql_database == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="sql_database"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.sql_database == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="sql_database"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.sql_database == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="sql_database"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.sql_database == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>



           <h5>noSQL Database</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="nosql_database"
              value="intermediate"
              checked={this.state.user.nosql_database == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="nosql_database"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.nosql_database == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="nosql_database"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.nosql_database == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="nosql_database"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.nosql_database == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>



           <h5>System Analysis(including drawing diagrams, flow charts,sequential diagrams and state diagrams) and Writing SRS document(Software Requrirements Specification)</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="system_analysing"
              value="intermediate"
              checked={this.state.user.system_analysing == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="system_analysing"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.system_analysing == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="system_analysing"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.system_analysing == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="system_analysing"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.system_analysing == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>

           

           <h5>Front-end Level</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="front_end_level"
              value="intermediate"
              checked={this.state.user.front_end_level == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="front_end_level"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.front_end_level == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="front_end_level"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.front_end_level == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="front_end_level"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.front_end_level == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>

           <h5>Back-end Level</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="back_end_level"
              value="intermediate"
              checked={this.state.user.back_end_level == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="back_end_level"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.back_end_level == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="back_end_level"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.back_end_level == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="back_end_level"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.back_end_level == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>

           <h5>Responsivness Design</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="responsive_level"
              value="intermediate"
              checked={this.state.user.responsive_level == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="responsive_level"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.responsive_level == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="responsive_level"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.responsive_level == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="responsive_level"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.responsive_level == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>


           <h5>Coding Refactoring & enhancing performance</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="coding_refactoring"
              value="intermediate"
              checked={this.state.user.coding_refactoring == 'intermediate'}/>
            Intermediate
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="coding_refactoring"
              onChange={this._handleChange}
              value="normal"
              checked={this.state.user.coding_refactoring == 'normal'}/>
            Normal
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="coding_refactoring"
              onChange={this._handleChange}
              value="expert"
              checked={this.state.user.coding_refactoring == 'expert'}/>
            Expert
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="coding_refactoring"
              onChange={this._handleChange}
              value="ninja"
              checked={this.state.user.coding_refactoring == 'ninja'}/>
            Ninja
          <span className="thirdCheckMark"></span>
          </label>
           </div>


             <h5 >I'm <u>ninja</u> in those front-end frameworks</h5> 
                 <div className="row m-1 col-12">
                 { this.ninja_front_end_frameworks.map((e,index)=>
                      <label key={index} className="col-6 col-sm-6 col-md-4  col-xl-4">
                        <input
                          onClick={this.checkbox_change} defaultChecked={this.state.user['ninja_front_end_frameworks'].indexOf(e)!=-1}
                          type="checkbox"
                          name="ninja_front_end_frameworks"
                          value={e}
                        />
                        {e}
                      <span className="thirdCheckMark"></span>
                      </label>
                  )
                }
                </div>
                <h5 >I'm <u>expert</u> in those front-end frameworks</h5> 
                 <div className="row m-1 col-12">
                 { this.expert_front_end_frameworks.map((e,index)=>
                      <label key={index} className="col-6 col-sm-6 col-md-4  col-xl-4">
                        <input
                          onClick={this.checkbox_change} defaultChecked={this.state.user['expert_front_end_frameworks'].indexOf(e)!=-1}
                          type="checkbox"
                          name="expert_front_end_frameworks"
                          value={e}
                        />
                        {e}
                      <span className="thirdCheckMark"></span>
                      </label>
                  )
                }
                </div> 

                <h5 >I'm <u>ninja</u> in those PHP frameworks</h5> 
                 <div className="row m-1 col-12">
                 { this.php_frameworks.map((e,index)=>
                      <label key={index} className="col-6 col-sm-6 col-md-4  col-xl-4">
                        <input
                          onClick={this.checkbox_change} defaultChecked={this.state.user['php_frameworks'].indexOf(e)!=-1}
                          type="checkbox"
                          name="php_frameworks"
                          value={e}
                        />
                        {e}
                      <span className="thirdCheckMark"></span>
                      </label>
                  )
                }
                </div> 

                <h5>Opening to learn a new technologies</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="open_to_learn"
              value="yes"
              checked={this.state.user.open_to_learn == 'yes'}/>
            Yes
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="open_to_learn"
              onChange={this._handleChange}
              value="no"
              checked={this.state.user.open_to_learn == 'no'}/>
            No
          <span className="thirdCheckMark"></span>
          </label>
          </div>
          <h5>Opening to travel</h5>
        <div className="row ml-1">
          <label className="col-sm-3 col-6 ">
            <input
              type="radio"
              onChange={this._handleChange}
              name="open_to_travel"
              value="yes"
              checked={this.state.user.open_to_travel == 'yes'}/>
            Yes
          <span className="thirdCheckMark"></span>
          </label>
          <label className="col-sm-3 col-6">
            <input
              type="radio"
              name="open_to_travel"
              onChange={this._handleChange}
              value="no"
              checked={this.state.user.open_to_travel == 'no'}/>
            No
          <span className="thirdCheckMark"></span>
          </label>
          </div>
        <button style={{ display: 'block', height: "100%" }} type="button" onClick={this.print} className="btn back mx-auto  mt-4">
          Print
        </button>
        <div className="mx-auto mt-4 bonus">
              Do you like my resume? .... YES<br/>You can download it 
                <a href="https://www.dropbox.com/s/kdopbr9qykbo4pv/Mhd%20Wael%20Jazmaty.doc?dl=0"  target="_blank"  className="btn firstMove text-uppercase d-block bold mt-2" >
                  Download 
                </a>
              </div>
      </form>]
    )
  }
}
export default FirstStep;


// WEBPACK FOOTER //
// ./src/PersonalInfoForm.js