import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import "./NewsPage.css";
import ButtonToForm from '../../Components/ButtonToForm/ButtonToForm';
import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer"

const NewsPage = () => {
  return (
    <div>

      <Navbar />     

      <div className='main'>
        <Header/>
        <div className='wrapper'>
          <News />
        </div>

      </div>
    <Footer/>
    </div>
  )
}

export default NewsPage