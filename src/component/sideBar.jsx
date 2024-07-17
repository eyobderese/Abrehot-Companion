import Icon from "./icon";
import home from "../assets/home.png"
import group from '../assets/group.png'
import style from './sideBar.module.css'
function SideBar(){
    

    return (
        <div className={style.conatiner}>

            <Icon src={home}/>
            <Icon src={group}/>

        </div>
    )
}

export default SideBar