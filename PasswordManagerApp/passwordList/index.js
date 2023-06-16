import {AiFillDelete} from 'react-icons/ai';
import './index.css';
function PasswordItem(props){
    const {eachPassWord,showPassword,deletePassword}=props;
    const{id,colour,websiteName,userName,password}=eachPassWord;
    const deleteDetails=()=>{
        deletePassword(id)
    }
    return(
        <li  className='eachPassword-container'>
            <div className='details-container'>
                <button className={colour}>{websiteName[0]}</button>
                 <div>
                    <p>{websiteName}</p>
                    <p>{userName}</p>
                    <p>{showPassword?password:'*'.repeat(password.length)}</p>
                 </div>
                
            </div>
            <AiFillDelete onClick={deleteDetails}/>
        </li>
    )
}
export default PasswordItem;