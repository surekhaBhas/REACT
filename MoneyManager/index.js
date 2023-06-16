import {FaTrashAlt} from 'react-icons/fa';
function HistoryItem(props){
    const {eachHistory, onDeleteHistory}=props
    const {id,type,title,amount}=eachHistory
    const deleteHistory=()=>{
        onDeleteHistory(id)
    }
    return(
        <li>
            
            <p>{title}</p>
            <p>{amount}</p>
            <p>{type}</p>
            <FaTrashAlt onClick={deleteHistory}/>
            
        </li>
    )
}
export default HistoryItem;