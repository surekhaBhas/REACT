import {Component} from 'react';
import './index.css';
import {AiOutlineGlobal,AiFillLock,AiOutlineSearch} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid';
import PasswordItem from '../passwordList';
class PasswordManager extends Component{
    state={websiteName:'',userName:'',password:'',passwordList:[],showPassword:false, searchWebsite:''}
    wedaddressChange=(event)=>{
       this.setState({websiteName:event.target.value})
    }
    changeUserName=(event)=>{
        this.setState({userName:event.target.value})
    }
    changePassword=(event)=>{
        this.setState({password:event.target.value})  
    }  
    onAddingPassword=(event)=>{
        event.preventDefault()
         const {websiteName,userName,password}=this.state
         const coloursList=['yellow','green','orange','red','blue']
         const randomcolour=coloursList[Math.floor(Math.random()*5)]
         const newList={
            id:uuidv4(),
            websiteName,
            userName,
            password,
            colour:randomcolour
        }
        this.setState(prevState=>{
            return ({passwordList:[...prevState.passwordList,newList],websiteName:'',userName:'',password:''})
        })
        
    }
    changingShowHide=()=>{
        this.setState(prevState=>{
            return ({showPassword:!prevState.showPassword})
        })
    }
    deletePassword=(id)=>{
        const {passwordList}=this.state
        const filterList=passwordList.filter(eachpassWord=>{
            return eachpassWord.id!==id
        })
        this.setState({passwordList:filterList})
    }
    onChangeSearchWebsite=(event)=>{
           this.setState({searchWebsite:event.target.value})
    }
    getSearchPassword=()=>{
        const {passwordList,searchWebsite}=this.state
        const searchList=passwordList.filter(eachPassWord=>{
            return eachPassWord.websiteName.includes(searchWebsite)
        })
        
        return searchList
    }
   
 
    render(){   
        const {password,showPassword,websiteName,userName,searchWebsite}=this.state
        const fliteredSearchList=this.getSearchPassword()
    
       
        return(
            <div className='container'>
                <div>
                    <nav>
                        <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='logo' className='logo'/> 
                    </nav>
                    <div className='Password-manager-container'>
                        <form className='input-container' onSubmit={this.onAddingPassword}>
                           <p className='heading'>Add New Password</p>
                           <div  className='icon-box'><AiOutlineGlobal className='icon'/><input type='text' placeholder='Enter Website'  onChange={this.wedaddressChange} value={websiteName}/></div>
                           <div  className='icon-box'> <FaUserAlt className='icon'/><input type='text' placeholder='Enter Username' autoComplete="username"  onChange={this.changeUserName} value={userName}/></div>
                           <div  className='icon-box'><AiFillLock className='icon' /><input type='password' value={password}  autoComplete="current-password"  placeholder='Enter Password' onChange={this.changePassword}/></div>
                           <button className='add-btn' type='submit'>Add</button>
                        </form>
                        <img src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png ' alt='password' className='password-manager-image'/>
                    </div>
                </div>
                <div className='container2'>
                    <nav className='nav-conatiner'>
                      <div className='password-count'>
                        <p className='heading2'> Your Passwords</p>
                        <button className='count-btn'>{fliteredSearchList.length}</button>
                      </div>
                      <div className='search-container'>
                        <AiOutlineSearch className='icon'/>
                        <input type='search' placeholder='Search' className='search-input' value={searchWebsite} onChange={this.onChangeSearchWebsite}/>
                      </div>
                    </nav>
                    <hr/>
                    <div className='checkbox-container'>
                        <input id='checkbox' onChange={this.changingShowHide} type='checkbox' className='checkbox'/>
                        <label className='showPassword' htmlFor='checkbox'>Show Passwords</label>
                    </div>
                    {fliteredSearchList.length>0?<ul>
                        {fliteredSearchList.map(eachPassWord=>{
                            return <PasswordItem key={eachPassWord.id} eachPassWord={eachPassWord} showPassword={showPassword} deletePassword={this.deletePassword}/>
                        })}
                    </ul>
                    
                        :<div className='no-passwords'>
                            <img src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png' className='password-manager-image' alt='no passwords'/>
                            <h3>No Passwords</h3>
                        </div>}

                    
                </div>
            </div>
        )
    }
}export default PasswordManager; 