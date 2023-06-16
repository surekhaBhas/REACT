import './index.css';
function WinOrLossCard(props){
    const {score,win,playAgain}=props
    
    const OnplayAgain=()=>{
        playAgain()
    }
    return(
        <div>
            {!win &&<div className='win-lose-container'>
                <div className='result-display'>
                    <h1>You Lose</h1>
                    <p className='score'>Score</p>
                    <p className='score-display'>{score}/12</p>
                    <button onClick={OnplayAgain}>Play Again</button>
                </div>
                <img src='https://assets.ccbp.in/frontend/react-js/lose-game-img.png' alt='you Lose' className='image'/>
            </div>}
            {win &&<div className='win-lose-container'>
                <div className='result-display'>
                    <h1>You Won</h1>
                    <p className='score'>Best Score</p>
                    <p className='score-display'>{score}/12</p>
                    <button onClick={OnplayAgain}>Play Again</button>
                </div>
                <img src='https://assets.ccbp.in/frontend/react-js/won-game-img.png' alt='you Lin' className='image'/>
            </div>}
        </div>
    )
}
export default WinOrLossCard;