import { Component } from "react";
import './app.css';
import {v4 as uuidv4} from 'uuid';
import HistoryItem from "./index";


class MoneyManager extends Component{
    state={TypeInput:'Income',titleInput:'',amountInput:0,HistoryList:[],totalIncome:0,totalExpenses:0}
 
     OnChangeType=(event)=>{
        this.setState({TypeInput:event.target.value})
     }
     OnChangeTitle=(event)=>{
        this.setState({titleInput:event.target.value})
     }
     OnChangeAmount=(event)=>{
        this.setState({amountInput:event.target.value})
     }
     OnaddindHistory=()=>{
        const {TypeInput,titleInput,amountInput}=this.state
        const newHistory={
            id:uuidv4(),
            type:TypeInput,
            title:titleInput,
            amount:amountInput
        }
        this.setState(prevState=>
            ({HistoryList:[...prevState.HistoryList,newHistory],titleInput:'',amountInput:''})
            )
        if(TypeInput==='Income'){
            this.setState(prevState=>{
                return ({totalIncome:parseInt(prevState.totalIncome)+parseInt(amountInput)})
            })
            
        }
        else{
            this.setState(prevState=>{
                return ({totalExpenses:parseInt(prevState.totalExpenses)+parseInt(amountInput)})
            })
            
        }  
     }
     onDeleteHistory=(id)=>{
        const {HistoryList}=this.state
            const FliteredList=HistoryList.filter(eachHistory=>{
                if (eachHistory.id===id && eachHistory.type==='Income'){
                    this.setState(prevState=>{
                        return ({totalIncome:prevState.totalIncome-parseInt(eachHistory.amount)})
                    })
                }
                else if(eachHistory.id===id && eachHistory.type!=='Income'){
                    this.setState(prevState=>{
                        return ({totalExpenses:prevState.totalExpenses-parseInt(eachHistory.amount)})
                    })
                }
                return eachHistory.id !==id
            })
        this.setState({HistoryList:FliteredList})
     }

    render(){
        const {titleInput,amountInput,totalIncome,totalExpenses,HistoryList}=this.state
        const totalbalance=totalIncome-totalExpenses;
        return(
            <div className='container'>
                <div>
                    <header>
                        <h1 className='name-heading'>Hi, Richard</h1>
                        <p>Welcome back to your <span>Money Manager</span></p>
                    </header>
                    <div className='display-card-container'>
                    <div className='display-container balance-container'>
                        <img src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png ' alt='balance'/>
                        <div>
                            <p>Your Balance</p>
                            <p>Rs {totalbalance}</p>
                        </div>
                    </div>
                    <div className='display-container Income-container' >
                        <img src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png' alt='Income'/>
                        <div>
                            <p>Your Income</p>
                            <p>Rs {totalIncome}</p>
                        </div>
                    </div>
                    <div className='display-container Expenese-container'>
                        <img src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png' alt='Expenses'/>
                        <div>
                            <p>Your Expenses</p>
                            <p>Rs {totalExpenses}</p>
                        </div>
                    </div>
                    </div>
                    <div className='tran-his-container'>
                    <div className='transaction-container'>
                        <h3>Add Transaction</h3>
                        <p className='input-title'>TITLE</p>
                        <input type='text' placeholder='TITLE' onChange={this.OnChangeTitle} value={titleInput}/>
                        <p className='input-title'>AMOUNT</p>
                        <input type='text' placeholder='AMOUNT' onChange={this.OnChangeAmount} value={amountInput}/>
                        <p className='input-title'>TYPE</p>
                        <select onClick={this.OnChangeType} >
                            <option value='Income'>Income</option>
                            <option value='Expenses'>Expenses</option>
                        </select>
                        <button type='submit' onClick={this.OnaddindHistory}>Add</button>
                    </div>
                    <div className='history-container'>
                        <h3>History</h3>
                        
                        <ul>
                        <li>
                                <p>Title</p>
                                <p>Amount</p>
                                <p>Type</p>
                            </li>
                            
                            {
                                HistoryList.map(eachHistory=>{
                                    return <HistoryItem key={eachHistory.id} eachHistory={eachHistory}  onDeleteHistory={this.onDeleteHistory}/>
                                }
                                    )
                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MoneyManager;