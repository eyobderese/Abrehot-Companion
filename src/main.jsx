import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Icon from './component/icon.jsx'
import home from './assets/home.png'
import SideBar from './component/sideBar.jsx'
import Book from './component/book.jsx'
import ChatBot from './component/chatBoot.jsx'
import Home from './page/Home.jsx'
import Login from './page/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
