import SearchForm from './searchForm';
import style from './nav.module.css';
import logo from '../assets/logo.png';
import Profile from './profile';
function Nav(){
    return (
        <nav className={style.nav}>
        <div className={style.logo}>
            <img src={logo} className={style.img}></img>
        </div>
        <SearchForm />
        <div className={style.navContener}>
        <Profile/>
        <a>LogOut</a>
        </div>
    </nav>

    )
}

export default Nav;