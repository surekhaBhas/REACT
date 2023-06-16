import { Component } from "react";
import {v4 as uuidv4} from 'uuid';
import {format} from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css';
import AddAppointment from "./app";
class Appointment extends Component{
    state={startDate:new Date(),nameInput:'',appointmentList:[],starItem:false}
    setStartDate=(date)=>{
        this.setState({startDate:date})
    }
    OnChangename=(event)=>{
             this.setState({nameInput:event.target.value})
    }
    addingAppointment=()=>{
        const {nameInput,startDate}=this.state
        const newAppointment={
            id:uuidv4(),
            title:nameInput,
            dateTime:format(startDate,'dd MMMM yyyy, EEEE'),
            isStared:false
        }
        this.setState(prevState=>{
            return({appointmentList:[...prevState.appointmentList,newAppointment],nameInput:'',startDate:''})
        })
    }
    onChangeStaredList=()=>{
        
        this.setState(prevState=>({starItem:!prevState.starItem}))
        
    }
    getStaredList=()=>{
        const {starItem}=this.state;
        if (starItem===true){
            const {appointmentList}=this.state
            const staredList=appointmentList.filter(eachItem=>{
                return eachItem.isStared===true
              })
              return staredList
        }

    }
    ChangingStarBtn=(id)=>{
        this.setState(prevState=>({
            appointmentList:prevState.appointmentList.map((eachAppointment)=>{
                if(eachAppointment.id===id){
                    return{...eachAppointment,isStared:!eachAppointment.isStared} 
                }
                return eachAppointment
            })
        }))
    }
    
    render(){
        const {startDate,nameInput,appointmentList,starItem} = this.state;
        const staredButton=starItem?'active-button':'inActive-button';
        const staredList=this.getStaredList();
        return(
            <div className="container">
                <div className='card-container'>
                   <h2>Add Appointment</h2>
                   <div className='input-container'>
                   <div>
                    <p classNmae='paragraph'>TITLE</p>
                   <input type='text' placeholder='Title' value={nameInput} onChange={this.OnChangename}/>
                   <p className='paragraph'>DATE</p>
                   <DatePicker 
                    selected={startDate} 
                    onChange={(date) => this.setStartDate(date)}  
                    placeholderText="dd/mm/yyyy"
                   />
                   <button className='add-button' type='submit' onClick={this.addingAppointment}>Add</button>
                   </div>
                   <div>
                    <img src='https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png' alt='appointment'/>
                   </div>
                   </div>
                   <div className='heading'>
                    <h3>Appointments</h3>
                    <button className={staredButton} onClick={this.onChangeStaredList}>Stared</button>
                   </div>
                   {!starItem &&<ul>
                   {
                    appointmentList.map((eachAppointment)=>{
                      return  <AddAppointment eachAppointment={eachAppointment} key={eachAppointment.id} ChangingStarBtn={this.ChangingStarBtn} />
                    })
                   }
                   </ul>}   
                   {starItem &&<ul>
                   {
                    staredList.map((eachAppointment)=>{
                      return  <AddAppointment eachAppointment={eachAppointment} key={eachAppointment.id} ChangingStarBtn={this.ChangingStarBtn} />
                    })
                   }
                   </ul>}  
                </div>
            </div>
        )
    }
}
export default Appointment;