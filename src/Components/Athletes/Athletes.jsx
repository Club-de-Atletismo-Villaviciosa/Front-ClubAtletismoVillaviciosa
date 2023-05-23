import React, { useEffect, useState } from 'react'
import Athlete from './Athlete/Athlete'
import ApiGetService from '../../Services/ApiGetService'
import "./Athletes.css" 

function Athletes({handleEdit}) {
    let [athletes, setAthletes] = useState([{}])
    const urlGeneral = "http://localhost:8080/api/v1/athlete"

    useEffect(() => {
      ApiGetService(urlGeneral)
          .then((data) => setAthletes(data))
          .catch((error) => console.error(error));
      }, []);

  return (
    <div className='athletes'>
        {athletes.map((athlete,id) => (
            <Athlete key={id} athlete={athlete} handleEdit={handleEdit} />
        ))}
    </div>
  )
}

export default Athletes