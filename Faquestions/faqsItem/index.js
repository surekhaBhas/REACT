import {AiOutlinePlusCircle,AiFillMinusCircle} from 'react-icons/ai'
import './index.css'
function FaqsItems(props){
    const {eachList,displayAnswer}=props;
    const {id,question,answer,isAnswered}=eachList
    const showanswer=()=>{
        
        displayAnswer(id)
    }
    return(
        <li className='ques-ans-container'>
            <div className='ques-container'>
                <p>{question}</p>
                <p >{isAnswered?<AiFillMinusCircle className='icon' onClick={showanswer}/>:<AiOutlinePlusCircle className='icon' onClick={showanswer}/>}</p>
            </div>
            {isAnswered&&<div><hr/><p>{answer}</p></div>}
        </li>
    )
}
export default FaqsItems;