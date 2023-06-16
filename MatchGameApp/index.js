import { Component } from "react";
import './index.css';
import {RiTimerLine} from 'react-icons/ri';
import TabItem from "./tabItem";
import Thumbnail from "./thumbnail";
import MatchItem from "./matchItem";
import {GrPowerReset} from 'react-icons/gr';
const tabsList=[
    {
        tabId:'Fruits',
        displayText:'Fruits'
    },
    {
        tabId:'Animals',
        displayText:'Animals'
    },
    {
        tabId:'Places',
        displayText:'Places'
    }
]
const imagesList=[
    {
        id:1,
        imagesUrl:'https://tse4.mm.bing.net/th?id=OIP._fpL6Wo5uc-yHoUrkQEB8gHaFj&pid=Api&P=0',
        thumbnailUrl:'https://tse4.mm.bing.net/th?id=OIP._fpL6Wo5uc-yHoUrkQEB8gHaFj&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'orange',
        thumbnailAlt:'orange',
    },
    {
        id:2,
        imagesUrl:'https://tse3.mm.bing.net/th?id=OIP.-4RJk-TNzc0Ulbu6-Ogx_AHaFR&pid=Api&P=0',
        thumbnailUrl:'https://tse3.mm.bing.net/th?id=OIP.-4RJk-TNzc0Ulbu6-Ogx_AHaFR&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'apple',
        thumbnailAlt:'apple',
    },
    {
        id:3,
        imagesUrl:'https://tse3.mm.bing.net/th?id=OIP.C2yRvmtMBxguk0l6W6bTTgHaGI&pid=Api&P=0',
        thumbnailUrl:'https://tse3.mm.bing.net/th?id=OIP.C2yRvmtMBxguk0l6W6bTTgHaGI&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'pomegranate',
        thumbnailAlt:'pomegranate',
    },
    {
        id:4,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.3ztTE7dCUcDC3TTbq7F2BgHaEo&pid=Api&P=0',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.3ztTE7dCUcDC3TTbq7F2BgHaEo&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'grapes',
        thumbnailAlt:'grapes',
    },
    {
        id:5,
        imagesUrl:'https://tse3.mm.bing.net/th?id=OIP.KlOyb1aAf-OOhOUpKvxYVQHaE8&pid=Api&P=0',
        thumbnailUrl:'https://tse3.mm.bing.net/th?id=OIP.KlOyb1aAf-OOhOUpKvxYVQHaE8&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'kiwi',
        thumbnailAlt:'kiwi',
    },
    {
        id:6,
        imagesUrl:'https://tse4.explicit.bing.net/th?id=OIP.QnUZ-FinmLDSN4lT3_eucwHaFj&pid=Api&P=0',
        thumbnailUrl:'https://tse4.explicit.bing.net/th?id=OIP.QnUZ-FinmLDSN4lT3_eucwHaFj&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'watermelon',
        thumbnailAlt:'watermelon',
    },
    {
        id:7,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.M8Y4SmciKiXAf6130r_JwAHaFj&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.M8Y4SmciKiXAf6130r_JwAHaFj&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'cherry',
        thumbnailAlt:'cherry',
    },
    {
        id:8,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.kiE2IoZPoe0jj6RR3vjHPAHaE7&pid=Api&P=0',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.kiE2IoZPoe0jj6RR3vjHPAHaE7&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'papaya',
        thumbnailAlt:'papaya',
    },
    {
        id:9,
        imagesUrl:'https://tse3.mm.bing.net/th?id=OIP.ESvtsBnYxWO40A061MtJoAHaEo&pid=Api&P=0',
        thumbnailUrl:'https://tse3.mm.bing.net/th?id=OIP.ESvtsBnYxWO40A061MtJoAHaEo&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'strawberry',
        thumbnailAlt:'strawberry',
    },
    {
        id:10,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.xVefuc__pqbPlVi0FRuP1gHaE5&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.xVefuc__pqbPlVi0FRuP1gHaE5&pid=Api&P=0',
        category:'Fruits',
        imageAlt:'dragonfruit',
        thumbnailAlt:'dragonfruit',
    },
    {
        id:11,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.c8giB5OaQ9BAgmpVr5JswgHaFw&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.c8giB5OaQ9BAgmpVr5JswgHaFw&pid=Api&P=0',
        category:'Animals',
        imageAlt:'panda',
        thumbnailAlt:'panda',
    },
    {
        id:12,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.wB2a6rb9slkYqgy9vPcongHaFj&pid=Api&rs=1&c=1&qlt=95&w=152&h=114',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.wB2a6rb9slkYqgy9vPcongHaFj&pid=Api&rs=1&c=1&qlt=95&w=152&h=114',
        category:'Animals',
        imageAlt:'zebra',
        thumbnailAlt:'zebra',
    },
    {
        id:13,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.XSqrHFDsIg7-5DqlcBqj8gHaKB&pid=Api&P=0',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.XSqrHFDsIg7-5DqlcBqj8gHaKB&pid=Api&P=0',
        category:'Animals',
        imageAlt:'giraffe',
        thumbnailAlt:'giraffe',
    },
    {
        id:14,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.X8-SS3PSw7PYf7XeNMDpvgHaE8&pid=Api&rs=1&c=1&qlt=95&w=147&h=98',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.X8-SS3PSw7PYf7XeNMDpvgHaE8&pid=Api&rs=1&c=1&qlt=95&w=147&h=98',
        category:'Animals',
        imageAlt:'monkey',
        thumbnailAlt:'monkey',
    },
    {
        id:15,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.4bzonBrO00hhW0GDhIKu9QHaLH&pid=Api&P=0',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.4bzonBrO00hhW0GDhIKu9QHaLH&pid=Api&P=0',
        category:'Animals',
        imageAlt:'tiger',
        thumbnailAlt:'tiger',
    },
    {
        id:16,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.TbaJvRyCu1DVQph5SG6w-wHaE6&pid=Api&rs=1&c=1&qlt=95&w=134&h=89',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.TbaJvRyCu1DVQph5SG6w-wHaE6&pid=Api&rs=1&c=1&qlt=95&w=134&h=89',
        category:'Animals',
        imageAlt:'wolf',
        thumbnailAlt:'wolf',
    },
    {
        id:17,
        imagesUrl:'https://tse4.mm.bing.net/th?id=OIP.-cd5Gxgi1CSkdI3KtRpaQwHaFj&pid=Api&P=0',
        thumbnailUrl:'https://tse4.mm.bing.net/th?id=OIP.-cd5Gxgi1CSkdI3KtRpaQwHaFj&pid=Api&P=0',
        category:'Animals',
        imageAlt:'dog',
        thumbnailAlt:'dog',
    },
    {
        id:18,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.aUnMApSSiGAT5bftnRfupgHaFE&pid=Api&rs=1&c=1&qlt=95&w=153&h=105',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.aUnMApSSiGAT5bftnRfupgHaFE&pid=Api&rs=1&c=1&qlt=95&w=153&h=105',
        category:'Animals',
        imageAlt:'camel',
        thumbnailAlt:'camel',
    },
    {
        id:19,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.MpmYBjrTrzejcslqxlWcTwHaHV&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.MpmYBjrTrzejcslqxlWcTwHaHV&pid=Api&P=0',
        category:'Animals',
        imageAlt:'cat',
        thumbnailAlt:'cat',
    },
    {
        id:20,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.8uB_ZbXHR_phqv9usg_oXwHaFj&pid=Api&P=0',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.8uB_ZbXHR_phqv9usg_oXwHaFj&pid=Api&P=0',
        category:'Animals',
        imageAlt:'lion',
        thumbnailAlt:'lion',
    },
    {
        id:21,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.be0MIqTeq9Ic-tBki76ZDwHaE7&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.be0MIqTeq9Ic-tBki76ZDwHaE7&pid=Api&P=0',
        category:'Places',
        imageAlt:'tajmahal',
        thumbnailAlt:'tajmahal',
    },
    {
        id:22,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.Uk9Rjn-Uf6HQLflGg7mOzAHaE8&pid=Api&rs=1&c=1&qlt=95&w=151&h=101',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.Uk9Rjn-Uf6HQLflGg7mOzAHaE8&pid=Api&rs=1&c=1&qlt=95&w=151&h=101',
        category:'Places',
        imageAlt:'sydney',
        thumbnailAlt:'sydney',
    },
    {
        id:23,
        imagesUrl:'https://tse4.mm.bing.net/th?id=OIP.aTDCMwxaghXF27NrMDxTegHaFj&pid=Api&P=0',
        thumbnailUrl:'https://tse4.mm.bing.net/th?id=OIP.aTDCMwxaghXF27NrMDxTegHaFj&pid=Api&P=0',
        category:'Places',
        imageAlt:'swizerland',
        thumbnailAlt:'swizerland',
    },
    {
        id:24,
        imagesUrl:'https://tse4.mm.bing.net/th?id=OIP.CrQc7qtKDcmn3tgkT7tniwHaEK&pid=Api&P=0',
        thumbnailUrl:'https://tse4.mm.bing.net/th?id=OIP.CrQc7qtKDcmn3tgkT7tniwHaEK&pid=Api&P=0',
        category:'Places',
        imageAlt:'japan',
        thumbnailAlt:'japan',
    },
    {
        id:25,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.YucvyV2zVkqqtsxyu2IrzQELDp&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.YucvyV2zVkqqtsxyu2IrzQELDp&pid=Api&P=0',
        category:'Places',
        imageAlt:'manali',
        thumbnailAlt:'manali',
    },
    {
        id:26,
        imagesUrl:'https://tse3.mm.bing.net/th?id=OIP.8y3mPiH38X9b3Nwt11bc1QHaE9&pid=Api&P=0',
        thumbnailUrl:'https://tse3.mm.bing.net/th?id=OIP.8y3mPiH38X9b3Nwt11bc1QHaE9&pid=Api&P=0',
        category:'Places',
        imageAlt:'hampi',
        thumbnailAlt:'hampi',
    },
    {
        id:27,
        imagesUrl:'https://tse1.mm.bing.net/th?id=OIP.oM3aSbqvWLY-ufdwYHgA4QHaE7&pid=Api&P=0',
        thumbnailUrl:'https://tse1.mm.bing.net/th?id=OIP.oM3aSbqvWLY-ufdwYHgA4QHaE7&pid=Api&P=0',
        category:'Places',
        imageAlt:'bali',
        thumbnailAlt:'bali',
    },
    {
        id:28,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.PzcO2XQZfMzL-GvqJKCObwHaE8&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.PzcO2XQZfMzL-GvqJKCObwHaE8&pid=Api&P=0',
        category:'Places',
        imageAlt:'korea',
        thumbnailAlt:'korea',
    },
    {
        id:29,
        imagesUrl:'https://tse4.mm.bing.net/th?id=OIP.BIrxRGAv0KqxnxlQuIZvigHaE9&pid=Api&P=0',
        thumbnailUrl:'https://tse4.mm.bing.net/th?id=OIP.BIrxRGAv0KqxnxlQuIZvigHaE9&pid=Api&P=0',
        category:'Places',
        imageAlt:'srilanka',
        thumbnailAlt:'srilanka',
    },
    {
        id:30,
        imagesUrl:'https://tse2.mm.bing.net/th?id=OIP.deho-nA-Df_V5Lh5jb24RQHaE8&pid=Api&P=0',
        thumbnailUrl:'https://tse2.mm.bing.net/th?id=OIP.deho-nA-Df_V5Lh5jb24RQHaE8&pid=Api&P=0',
        category:'Places',
        imageAlt:'beach',
        thumbnailAlt:'beach',
    }
]
class MatchGame extends Component{
    state ={activeId:tabsList[0].tabId,MatchId:imagesList[0].imageAlt,score:0,seconds:0,playing:true}
    componentDidMount=()=>{
        this.timerId=(setInterval(this.tick,1000))
        
    }
    tick=()=>{
        const {seconds,playing}=this.state
        if (seconds<=59 && playing===true){
            this.setState(prevState=>{
            
                return ({seconds:prevState.seconds+1})
            })
        } else {
            clearInterval(this.timerId)
            this.setState({playing:false})
        }
    }
    selectingMatchImage=(thumbnailAlt)=>{
        const {MatchId}=this.state;
        if (MatchId===thumbnailAlt){
            const Number=Math.floor(Math.random()*imagesList.length)
            this.setState({MatchId:imagesList[Number].imageAlt})
            this.setState(prevState=>{
                return({score:prevState.score+1})
            })      
        } else {
            this.setState({playing:false})
        }
    }
    playAgain=()=>{
        this.setState({seconds:0})
        this.setState({score:0})
        this.setState({playing:true})
    }
    getFilterTabItem=()=>{
        const {activeId}=this.state
        const newList=imagesList.filter(eachImage=>{
            return activeId===eachImage.category
        })
        return newList
    }
    getSelectedImage=()=>{
        const {MatchId}=this.state
        const newList=imagesList.filter(eachImage=>{
            return eachImage.imageAlt===MatchId
        })
        return newList
    }
    changingTabItem=(tabId)=>{
        this.setState({activeId:tabId})
    }
    getRandomNumber=()=>{
      const  randomNumber=Math.floor(Math.random()*imagesList.length)
        return randomNumber
    }
    render(){
        const {activeId,score,seconds,playing}=this.state
        const SelectedImage=this.getSelectedImage()
        const filterImageList=this.getFilterTabItem()
        return(
            <div>
               <nav>
                   <img src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png' alt='logo' className='logo'/>
                   <div className='score-container'>
                      <p className='score-display'>Score: <span className='time-display'>{score}</span></p>
                      <div className='time-container'>
                        <RiTimerLine className='score-display'/>
                        <p className='time-display'>{seconds} sec</p>
                      </div>
                   </div>
               </nav>
               <div className='container'>
               {playing && <div>
                { SelectedImage.map(eachItem=>{
                    return <MatchItem key={eachItem.imageAlt} eachItem={eachItem}/>
                })}
                 <ul className='tab-container'>
                    {tabsList.map(eachTab=>{
                        
                        return <TabItem key={eachTab.tabId} eachTab={eachTab} isActive= {activeId===eachTab.tabId}  changingTabItem={this.changingTabItem} />
                    })}
                 </ul>
                 <ul className='images-container'>
                     {filterImageList.map(eachImage=>{
                        return <Thumbnail key={eachImage.thumbnailAlt} eachImage={eachImage} selectingMatchImage={this.selectingMatchImage} />
                     })}
                 </ul>
                 
               </div>}
               {!playing &&<div className='scoreCard-container'>
               <div>
                 <img src='https://assets.ccbp.in/frontend/react-js/match-game-trophy.png' alt='score-card' className='trophy'/>
                 <p>Your Score</p>
                 <p>{score}</p>
                 <button className='playagain' onClick={this.playAgain}><GrPowerReset className='restart'/>PLAY AGAIN</button>
               </div>
               </div>}
               </div>
              </div>   
        )
    }i
}
export default MatchGame;