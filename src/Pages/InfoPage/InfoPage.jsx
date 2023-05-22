import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Navbar from '../../Components/Navbar/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../../Services/AuthContext'

function InfoPage() {

  return (
    <div>

      <Navbar />
      <div className='main'>
        <Header />
        <div className='wrapper'>
          <InfoSection />
        </div>
        <Footer />
      </div>
      
    </div>

  )
}

export default InfoPage