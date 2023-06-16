import './index.css';
function Thumbnail(props){
    const {eachImage,selectingMatchImage}=props;
    const {thumbnailAlt,thumbnailUrl}=eachImage
    const matchSelectImage=()=>{
        selectingMatchImage(thumbnailAlt)
    }
    return(
        <li>
            <img src={thumbnailUrl} alt={thumbnailAlt} className='thumbnailImage' onClick={matchSelectImage}/>
        </li>
    )
}
export default Thumbnail;