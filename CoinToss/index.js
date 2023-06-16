import {Component} from 'react';
import './index.css';
class CoinToss extends Component{
    state={face:true,head:0,tail:0,total:0}
    
    CoinTossing=()=>{
       const  coinValue=Math.floor(Math.random()*2)
       console.log(coinValue)
       if (coinValue===1){
            this.setState({face:true})
             this.setState(prevState=>{
                return ({head:prevState.head+1})
             })
             this.setState(prevState=>{
                return ({total:prevState.total+1})
             })
                
       }
       else if (coinValue===0){
        
        this.setState({face:false})  
        this.setState(prevState=>{
            return ({tail:prevState.tail+1})
        })
        this.setState(prevState=>{
            return ({total:prevState.total+1})
         }) 
       }
    } 
   
    
    render(){
        const {face,head,tail,total}=this.state
        return(
        <div className='container'>
            <div className='card-container'>
                <h1>Coin Toss Game</h1>
                <p>Heads(or)Tails</p>
                {face &&<img src='https://assets.ccbp.in/frontend/react-js/heads-img.png' alt='Head' className='rotation'/>}
                {!face &&<img src='https://assets.ccbp.in/frontend/react-js/tails-img.png' alt='tail' className='rotation'/>}
                <button type='button' onClick={this.CoinTossing}>Toss Coin</button>
                <div className='score-box'>
                    <p>Total:{total}</p>
                    <p>Heads:{head}</p>
                    <p>Talls:{tail}</p>
                </div>
            </div>
        </div>
        )
    }
}
export default CoinToss;