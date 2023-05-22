import React, { useEffect, useState } from 'react'
import Athlete from './Athlete/Athlete'
import CallAxiosAthletes from "../../Services/CallAxiosAthletes";
import "./Athletes.css" 

function Athletes({handleEdit}) {
    let [athletes, setAthletes] = useState([{}])

    useEffect(() => {
        CallAxiosAthletes().getAthletes()
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