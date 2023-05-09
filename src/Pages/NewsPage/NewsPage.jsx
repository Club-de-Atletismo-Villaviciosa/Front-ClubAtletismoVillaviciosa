import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import "./NewsPage.css";

const NewsPage = () => {
  return (
    <div>

        <Navbar />

        <div className='main'>
        <News />      
        <Footer />
        </div>

    </div>
  )
}

export default NewsPage