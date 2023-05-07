import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import ButtonToForm from '../../Components/ButtonToForm/ButtonToForm'

const NewsPage = () => {
  return (
    <div>

        <Navbar />

        <div className='main'>
        <News />     
        <ButtonToForm />

        </div>

    </div>
  )
}

export default NewsPage