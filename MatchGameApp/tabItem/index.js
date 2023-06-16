import "./index.css";
function TabItem(props){
    const {eachTab,isActive, changingTabItem}=props;
    
    const activeClass=isActive?'selected-tab':'tabItem-color'
    const {tabId,displayText}=eachTab
    const selectTabItem=()=>{
          changingTabItem(tabId)
    }
    return(
        <li >
            <button onClick={selectTabItem} className={activeClass}>{displayText}</button>
        </li>
    )
}
export default TabItem;