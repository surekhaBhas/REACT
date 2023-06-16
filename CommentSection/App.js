import { Component } from "react";
import './App.css';
import {v4 as uuidv4} from 'uuid';
import NewComment from ".";
const colorsList=['yellow','blue','orange','green','red','lightblue']
class CommentsApp extends Component{
  state={nameInput:'',commentInput:'',commentList:[]}
  OnChangeName=(event)=>{
    this.setState({nameInput:event.target.value})
  }
  OnchangeComment=(event)=>{
    this.setState({commentInput:event.target.value})
  }
  toggleIsLiked=(id)=>{
    this.setState(prevState=>({
      commentList:prevState.commentList.map(eachComment=>{
        if(eachComment.id===id){
          return { ...eachComment,isLiked:!eachComment.isLiked}
        }
        return eachComment
      })
    }))
  }
 
  AddComment=()=>{
    const {nameInput,commentInput}=this.state
    const color=Math.ceil(Math.random()*6);
    const className=colorsList[color];
    const newComment={
      id:uuidv4(),
      nameInput,
      commentInput,
      date:new Date(),
      isLiked:false,
      className:className
    }
    this.setState(prevState=>{
      return ({commentList:[...prevState.commentList,newComment],nameInput:'',commentInput:''})
    })
  }
  
  DeleteItem=(id)=>{
    const {commentList}=this.state
    const NewList=commentList.filter((eachComment)=>{
      return eachComment.id!==id
    } )
    this.setState({commentList:NewList})
  }
  render(){
    const{nameInput,commentInput,commentList}=this.state
    

    return(
        <div className='bg-container'>
            <h1>Comments</h1>
            <div className='container'>
            <div className="comment-input-container">
                <p className='title'>Say something about 4.0 Technologies</p>
                <input type='text' placeholder='name' onChange={this.OnChangeName} value={nameInput} className='name-input'/>
                <textarea rows='10' cols='40' placeholder='Your Comment' onChange={this.OnchangeComment} value={commentInput} className='commemt-input'/>
                <button onClick={this.AddComment}>Add Comment</button>
            </div>
            <img src='https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png' alt='review'/>
            </div>
            <div className='comment-count'>
                <p className='count'>{0}</p>
                <p>Comments</p>
            </div>
            <ul>
              {commentList.map(eachComment=>{
                return <NewComment comment={eachComment} key={eachComment.id} toggleIsLiked={this.toggleIsLiked} DeleteItem={this.DeleteItem}/>
              })}
            </ul>
        </div>
    )
  }
}
export default CommentsApp;