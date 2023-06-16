import { Component } from "react";
import './index.css';
import {TfiTimer} from 'react-icons/tfi'
class StopWatch extends Component{
    state ={isRunning:false,seconds:0,minutes:0}
    componentDidMount=()=>{
        this.uniqueId=setInterval(this.timer,1000)
      }
    startTimer=()=>{
        this.setState({isRunning:true})
    }
    timer=()=>{
        const{isRunning,seconds}=this.state
        if(isRunning){
            this.setState(prevState=>{
                return ({seconds:prevState.seconds+1})
            })
            if (seconds===59){
                this.setState({seconds:0})
                this.setState(prevState=>{
                    return({minutes:prevState.minutes+1})
                })
            }

        }
        else{
            clearInterval(this.uniqueId)
        }
    }
    stopTimer=()=>{
        this.setState({isRunning:false})
    }
    resetTimer=()=>{
        this.setState({seconds:0})
        this.setState({minutes:0})
    }
    render(){
        const {seconds,minutes}=this.state
        
        return(
            <div className='stopwatch'>
                <div className='container'>
                    <div >
                        <h1>
                            Stopwatch
                        </h1>
                        <div className="stopWatch-container">
                            <div className='timer'>
                           <TfiTimer className="time"/>
                           <p>Timer</p>
                           </div>
                           <h1>{minutes>9?minutes:'0'+minutes}:{seconds>9?seconds:'0'+seconds}</h1>
                           <div className="buttons-container"> 
                           <button className='start' onClick={this.startTimer}>Start</button>
                           <button className='stop' onClick={this.stopTimer}>Stop</button>
                           <button className='reset' onClick={this.resetTimer}>Reset</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StopWatch;