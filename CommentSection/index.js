import {formatDistanceToNow} from 'date-fns';
import './index.css';
import {FaRegThumbsUp,FaRegTrashAlt} from 'react-icons/fa';
function NewComment(props){
    const {comment,toggleIsLiked,DeleteItem}=props
    const {id,nameInput,commentInput,date,isLiked,className}=comment
    const time=formatDistanceToNow(date)
    const onChangeColor=()=>{
        toggleIsLiked(id)
    }
   const  onDeleteComment=()=>{
    DeleteItem(id)
    
   }
    const changeColor=isLiked?'like':'dislike'
    return(
        <li>
            <div className='name-container'>
                <p className={className}>{nameInput[0]}</p>
                <p className='profile-name'>{nameInput}</p>
                <p className='time'>{time}</p>
            </div>
            <p>{commentInput}</p>
            <div className='option-container'>
            <div  className={changeColor}>
                <FaRegThumbsUp onClick={onChangeColor} />
                <p>Like</p>
                </div>
                <FaRegTrashAlt onClick={onDeleteComment}/>
            </div>
        </li>
    )

}
export default NewComment;