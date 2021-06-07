import React, {Component}from 'react'
import '../resource/css/tab.css'
import axios from 'axios'
import EditStd from '../editwin/EditStd'

class StdTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentinfo:[],
            editstd:[]     
        }
    }
    editarr=[]
    componentDidMount() {
        axios({
            method:"get",
            url:"http://localhost:3030/studentdata"
        }).then((res)=>{
            console.log(res)
            if(res.data){
                this.setState({
                    studentinfo:res.data
                })                
            }
        },(err)=>{
            console.log(err)
        })
    }
    // edit
    edit=[]
    editBtn=(id)=>{
        // alert(id);
        axios({
            method:"get",
            url:`http://localhost:3030/studentdata/${id}`
        }).then((res)=>{
            // debugger
            console.log(res)
            this.edit.push(res.data)
           if(res.statusText==="OK"){
               this.setState({
                   editstd:this.edit
               })
           }
           
        },(err)=>{
            console.log(err)
        })
    }

    // delete data
    deleteData=(id)=>{
        console.log(id)
        axios({
            method:"delete",
            url:`http://localhost:3030/studentdata/${id}`
        }).then((res)=>{
            console.log("data deleted",res)
            window.location.href="/"
        },(err)=>{
            console.log(err)
        })
    }
    
        render(){
            console.log(this.state.editstd);
        return (
            <div className="flex-table">
               {/* header */}
               <div className="header">
                   <div className="heading">
                       <h3>Student List</h3>
                   </div>
                   
                   <div className="header-btn">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add">
                      <span class="fas fa-user-plus"></span> Add</button>
                   </div>
               </div>

               {/* table */}
               <div className="box-table">
                <table className="tab-data">
                <tr id="th-header">
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Qualification</th>
                    <th>Created On</th>
                    <th>Action</th>
                </tr>
              {/* =================fetch data and show on table============= */}
                {this.state.studentinfo.map((ele,index)=>{
                    return<tr id="th-data" >
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.qualification}</td>
                    <td>{ele.currentdate}</td>
                    <td>
                    <div className="btn-action">
                        <button data-toggle="modal" data-target="#edit" onClick={()=>{this.editBtn(ele.id)}}><span class="fas fa-user-edit"></span></button>|
                        <button onClick={()=>{this.deleteData(ele.id)}}><span class="fas fa-trash"></span></button>
                    </div>
                    </td>   
                </tr> 
                })}              
               
                   {this.state.editstd.map((ele)=>{
                       return <EditStd editdetails={ele} />
                   })}
               
                </table>
               </div>
            </div>
        )
   }
}
export default StdTable
