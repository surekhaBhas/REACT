import './index.css';
function EmojiCard(props){
    const {eachEmoji,playingGame}=props;
    const {id,emoji}=eachEmoji;
    
    const playingEmojiGame=()=>{
        playingGame(id)

    }

    return(
        <li>
            <p className='emoji' onClick={playingEmojiGame}>{emoji}</p>
        </li>
    )
}
export default EmojiCard;