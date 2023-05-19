import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Calendar from '../../Components/Calendar/Calendar'
import Navbar from '../../Components/Navbar/Navbar'
import './CalendarPage.css'

const CalendarPage = () => {
  return (
    <div>

        <Navbar />

        <div className='main'>
            <Calendar /> 
            <Footer />           
        </div>
        
    </div>
  )
}

export default CalendarPage