import { useState } from 'react'
import BookContainer from '../component/bookContainer';
import SideBar from '../component/sideBar';
import Nav from '../component/nav';
import ChatBot from '../component/chatBoot';



function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className={style.container}>
      <Nav/>
      <main className={style.main} onClick={()=>setChatOpen(false)}>
        <SideBar/>
        <div className={style.book_shelf}>
        <BookContainer title={"Recommended Book"}/>
        <BookContainer title={"Available Book"} />
        </div>

      </main>
      <div className={style.robot}>
      
          <img src={robot} alt="" className={style.robot_img} onClick={() => setChatOpen((current)=>!current)} />
      
        {chatOpen && <ChatBot />}


      </div>
    </div>
      
  )
}

export default Home
