import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import News2 from '../../Components/News/News2'

const NewsPage = () => {
  return (
    <div>

        <Navbar />

        <div className='main'>
        <News />   
        {/* <News2 /> */}
        
        
        </div>

    </div>
  )
}

export default NewsPage