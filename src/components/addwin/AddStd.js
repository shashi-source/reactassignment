import axios from 'axios'
import React,{Component}  from 'react'
import '../resource/css/style.css'

class AddStd extends Component {
  constructor() {
    super()
    this.state = {
          nameErr:"",
          emailErr:"",
          qualificationErr:"",
         
      }
  }

  // validation....
  vaild=()=>{
    if(!this.newstudentData.name){
      this.setState({
        nameErr:"please enter a valid Name."
      })
    }
    else if(this.newstudentData.email!=="@" && this.newstudentData.email!=="."){
        this.setState({
          emailErr:"please enter the valid E-mail with @ and ."
        })
    }
    else if(!this.newstudentData.qualification){
      this.setState({
        qualificationErr:"please enter valid information."
      })
    }

  }
  newstudentData={}

  stdName=(event)=>{
    this.newstudentData.name=event.target.value
  }
  stdEmail=(event)=>{
    this.newstudentData.email=event.target.value
  }
  stdQaulification=(event)=>{
    this.newstudentData.qualification=event.target.value
  }
  Submit=(event)=>{
    event.preventDefault();
    this.newstudentData.currentdate=new Date().toDateString();
    console.log(this.newstudentData);
    if(this.vaild){
      axios({
        method:"post",
        url:"http://localhost:3030/studentdata",
        data:this.newstudentData
      }).then((res)=>{
        console.log(res)
        window.location.href="/"
      },(err)=>{
        console.log(err)
      })
    }
    else{
    console.log("please check all entry")
    }
  }

  handleReset=()=>{
    // const {name,email,qualification}={...this.newstudentData}
    //     console.log(name,email,qualification)
        this.setState({
          nameVal:"",
          emailVal:"",
          quaVal:""
        })
  }

  render(){
    return (
    <div>            
        
        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content" style={{backgroundColor:"#6BD8C0"}}>
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New Student</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="flex-container">
                  <div className="validation-box">
                    <p>{this.state.nameErr}</p>
                    <p>{this.state.emailErrErr}</p>
                  </div>
                  <div className="flex-box">
                    <label className="label">Name</label>
                    <input type="text" onChange={this.stdName} value={this.state.nameVal} placeholder="Name"/>
                  </div>
                  <div className="flex-box">
                    <label className="label">E-mail</label>
                    <input type="email" onChange={this.stdEmail} value={this.state.emailVal} placeholder="email"/>
                  </div>
                  <div className="flex-box">
                    <label className="label">Qualification</label>
                    <input type="text" onChange={this.stdQaulification} value={this.state.quaVal} placeholder="Qualification"/>
                  </div>
                  <div className="flex-box btn">
                     <button  id="submit" onClick={this.Submit}>submit</button>
                     &emsp;<button type="reset" id="reset" onClick={this.handleReset}>reset</button>
                  </div>
                </div>
                
              </div>
          </div>
          </div>
        </div>
    </div>)
  }
}
export default AddStd
