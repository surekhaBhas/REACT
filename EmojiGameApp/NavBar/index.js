import './index.css';
function NavBar(props){
    const{playing,score,topScore}=props
    return(
        <div>
        {playing &&<nav>
            <div className='Logo-box'>
                <img src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png ' alt='logo'/>
                 <p>Emoji Game</p>
            </div>
            <div className='score-box'>
                <p>Score:{score}</p>
                <p>Top Score:{topScore}</p>
            </div>
        </nav>}
        {!playing &&<nav>
            <div className='Logo-box'>
                <img src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png ' alt='logo'/>
                 <p>Emoji Game</p>
            </div>
        </nav>}
        </div>
        
    )
}
export default NavBar;