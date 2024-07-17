import style from './icon.module.css'
function Icon({src}){
    return (
        <div className={style.container}> 
            <img src={src} alt=""  className={style.icon}></img>
        </div>
    )
}

export default Icon