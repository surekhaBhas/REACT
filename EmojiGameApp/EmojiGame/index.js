import { Component } from "react";
import NavBar from "../NavBar";
import './index.css';
import {v4 as uuidv4} from 'uuid';
import EmojiCard from "../EmojiCard";
import WinOrLossCard from "../WinOrLossCard";
const EmojiList=[
    {
        id:uuidv4(),
        emoji:'😂'
    },
    {
        id:uuidv4(),
        emoji:'😋'
    },
    {
        id:uuidv4(),
        emoji:'☹️'
    },
    {
        id:uuidv4(),
        emoji:'🤪'
    },
    {
        id:uuidv4(),
        emoji:'😍'
    },
    {
        id:uuidv4(),
        emoji:'😷'
    },
    {
        id:uuidv4(),
        emoji:'😭'
    },
    {
        id:uuidv4(),
        emoji:'🤕'
    },
    {
        id:uuidv4(),
        emoji:'🤭'
    },
    {
        id:uuidv4(),
        emoji:'😖'
    },
    {
        id:uuidv4(),
        emoji:'😴'
    },
    {
        id:uuidv4(),
        emoji:'😳'
    }
]
class EmojiGame extends Component{
    state={playing:true,score:0,topScore:0,win:true,idArray:[],shuffleArray:EmojiList}
  
    playingGame=(id)=>{ 
        const {score,topScore,idArray}=this.state
      const newShuffleList=()=>{
        let indexArray=[]
        let newShuffleArray=[]
        let i=0;
        while (i<EmojiList.length){
            let randomnNumber=Math.floor(Math.random()*EmojiList.length)
            if (!indexArray.includes(randomnNumber)){
                newShuffleArray.push(EmojiList[randomnNumber])
                indexArray.push(randomnNumber)
                i++;
            }
        }
        return newShuffleArray
    }
    this.setState({shuffleArray:newShuffleList()})
        if (idArray.includes(id)){
            this.setState({playing:false})
            this.setState({win:false})
        }
        this.setState(prevState=>{
            return ({idArray:[...prevState.idArray,id]})
        })
        this.setState({score:idArray.length})
        
        if (idArray.length===EmojiList.length){
           this.setState({idArray:[]})
           this.setState({playing:false})
           this.setState({win:true})
        }
        if (score>topScore){
            this.setState({topScore:score+1})
        }
    }
    playAgain=()=>{
        this.setState({idArray:[]})
        this.setState({playing:true})
        this.setState({score:0})
    }
    render(){
        const {playing,score,topScore,win,shuffleArray}=this.state
        
        return(
            <div>
                <NavBar playing={playing} score={score} topScore={topScore}/>
                <div className='container'>
                {playing&& <ul>
                    {
                        shuffleArray.map((eachEmoji)=>{
                            return <EmojiCard key={eachEmoji.id} eachEmoji={eachEmoji} playingGame={this.playingGame}/>
                        })
                    }
                </ul>}
                {!playing&&<WinOrLossCard score={score} win={win} playAgain={this.playAgain}/>}
                </div>
            </div>
        )
    }
}
export default EmojiGame;