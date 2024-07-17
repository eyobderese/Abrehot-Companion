import Book from './book'
import style from './bookContainer.module.css'
import image1 from '../assets/body in the wood.jpg'
import image2 from '../assets/soul.jpg'
import image3 from '../assets/walk in the shadow.webp'
import image4 from '../assets/hide.webp'
function BookContainer({title}){
    return (
        <>
        <h2 className={style.title}>{title}</h2>
      <div className={style.book_container}> 
      
      <Book src={image1}/>
      <Book src={image2}/>
      <Book src= {image3}/>
      <Book src={image4}/>
      <Book src={image2}/>
      <Book src= {image3}/>
      <Book src={image4}/>
    

      </div>
      </>
    )
}

export default BookContainer