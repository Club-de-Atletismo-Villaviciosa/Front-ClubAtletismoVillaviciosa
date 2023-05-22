import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Calendar from '../../Components/Calendar/Calendar'
import Navbar from '../../Components/Navbar/Navbar'
import './CalendarPage.css'
import Header from '../../Components/Header/Header'

const CalendarPage = () => {
  return (
    <div>

      <Navbar />
      <div className='main'>
        <Header />
        <div className='wrapper'>
          <Calendar />
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default CalendarPage