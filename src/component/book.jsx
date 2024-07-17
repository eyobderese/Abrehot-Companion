import style from './book.module.css'
import book from '../assets/book.jpg'

function Book({src}) {
    
    return (
        <div className={style.container}>
            <img className={style.image} src={src}>

            </img>
            <h3 className={style.h3}>
                Big Deal
            </h3>

            <button className={style.btn}>
                Show
            </button>
        </div>
    )
}

export default Book