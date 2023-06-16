import { Component } from "react";
import Clock from "./Clock";
import './index.css'
class DisplayClock extends Component{
    state={showClock:false}
    onToggleClock=()=>{
        this.setState(prevState=>{
            return ({showClock:!prevState.showClock})
        })
    }
    render(){
        const {showClock}=this.state;
        return(
            <div className='app-container'>
                <button type='button' className='toggele-button' onClick={this.onToggleClock}>{showClock?'Hide Clock':'Show Clock'}</button>
             {showClock && <Clock/>}
            </div>
        )
    }
}
export default DisplayClock;