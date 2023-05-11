import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import "./NewsPage.css";

const NewsPage = () => {
  return (
    <div>

      <Navbar />

      <div className='main'>
        <div className='wrapper'>
          <News />
        </div>

      </div>

    </div>
  )
}

export default NewsPage