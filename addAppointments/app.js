import './app.css';
import {FaStar} from 'react-icons/fa'
function AddAppointment(props){
    const {eachAppointment,ChangingStarBtn}=props
    const {id,title,dateTime,isStared}=eachAppointment
    const addStar=isStared?'Active':'InActive'
    const selectStar=()=>{
        console.log(id)
        ChangingStarBtn(id)
    } 
    return(
        <li className='appointmentBox'>
            <div className='title-box'>
                <p className='tittle'>{title}</p>
                <FaStar className={addStar} onClick={selectStar}/>
            </div>
            <p>{dateTime}</p>
        </li>
    )
}
export default AddAppointment;