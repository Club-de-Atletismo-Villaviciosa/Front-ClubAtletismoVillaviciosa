import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Navbar from '../../Components/Navbar/Navbar'

function InfoPage() {

  return (
    <div>
      <Navbar />

      <div className='main'>
        <Header />
        <InfoSection />
        <Footer />
      </div>
    </div>
  )
}

export default InfoPage