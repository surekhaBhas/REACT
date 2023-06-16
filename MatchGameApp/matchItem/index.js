import './index.css'
function MatchItem(props){
    const {eachItem}=props
    const{imagesUrl,imageAlt}=eachItem
    return(
        <div>
           <img src={imagesUrl} alt={imageAlt} className='image'/>
        </div>
    )
}
export default MatchItem;