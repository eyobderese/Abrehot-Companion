import style from './profile.module.css'
import profile from '../assets/profile.jpg'
function Profile(){

    return (

        <button className={style.btn}>
            <img src={profile} alt=""  className={style.img}/>
        </button>
    )
}

export default Profile