import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Navbar from '../../Components/Navbar/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../../Services/AuthContext'

function InfoPage() {
  
  return (
    <div>
        <Navbar />
        <InfoSection />
    </div>
  )
}

export default InfoPage