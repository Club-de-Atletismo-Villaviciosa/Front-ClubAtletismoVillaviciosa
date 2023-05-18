import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Navbar from '../../Components/Navbar/Navbar'

function InfoPage() {

  return (
    <div>
      <Navbar />
        <div className='main'>
        <InfoSection />
    </div>
    </div>
  )
}

export default InfoPage