import React, { Component } from 'react'
import axios from 'axios'

 class EditStd extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  editStudentData={}

  stdName=(event)=>{
    this.editStudentData.name=event.target.value
  }
  stdEmail=(event)=>{
    this.editStudentData.email=event.target.value
  }
  stdQaulification=(event)=>{
    this.editStudentData.qualification=event.target.value
  }
  Submit=(event)=>{
    //  console.log(this.props.editdetails?.id)
    //  console.log(this.props.editdetails)
    event.preventDefault();
    this.editStudentData.currentdate=new Date().toDateString();
    console.log(this.editStudentData);
    axios({
      method:"put",
      url:`http://localhost:3030/studentdata${this.props.editdetails?.id}`,
      data:this.editStudentData
    }).then((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    })
    
  }
 
    render() {
      console.log(this.props.editdetails && this.props.editdetails.id)
      console.log(this.props.editdetails?.id)
        return (
        <div>                    
            <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content" style={{backgroundColor:"#6BD8C0"}}>
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Student</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="flex-container">
                  <div className="flex-box">
                    <label className="label">Name</label>
                    <input type="text" placeholder="Name" onChange={this.stdName}/>
                  </div>
                  <div className="flex-box">
                    <label className="label">E-mail</label>
                    <input type="email" placeholder="email" onChange={this.stdEmail}/>
                  </div>
                  <div className="flex-box">
                    <label className="label">Qualification</label>
                    <input type="text" placeholder="Qualification" onChange={this.stdQaulification}/>
                  </div>
                  <div className="flex-box btn">
                     <button id="submit" onClick={this.Submit}>submit</button>
                     &emsp;<button id="reset">reset</button>
                  </div>
                </div>          
              </div>
          </div>
          </div>
        </div>
    </div>
        )
    }
}

export default EditStd
