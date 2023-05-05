import React from 'react'
import "./Athlete.css"

function Athlete({athlete}) {
  return (
    <div className='athlete'>
      <div className='athlete-img'>
        <img src={athlete.url} alt="athlete-img" />
      </div>
        <div className='athlete-description'>
            <p className='athlete-name'>{athlete.name}</p>
            <p className='athlete-attributes'>Categoría: {athlete.category}</p>
            <p className='athlete-attributes'>Disciplina: {athlete.discipline}</p>
            <p className='athlete-attributes'>Nº de licencia: {athlete.licenseNumber}</p>
        </div>
    </div>
  )
}

export default Athlete