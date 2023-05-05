import React, { useState } from 'react'
import Athlete from './Athlete/Athlete'
import "./Athletes.css"
import img from "./../../assets/img/Athlete.jpg" 

function Athletes() {
    let [athletes, setAthletes] = useState([{
        name: "Lorem Ipsum1",
        category: "Lorem ipsum",
        discipline: "Lorem ipsum",
        url: img,
        licenseNumber: 1
    }, {
        name: "Lorem Ipsum2",
        category: "Lorem ipsum",
        discipline: "Lorem ipsum",
        url: img,
        licenseNumber: 2
    }, {
        name: "Lorem Ipsum3",
        category: "Lorem ipsum",
        discipline: "Lorem ipsum",
        url: img,
        licenseNumber: 3
    }, {
        name: "Lorem Ipsum3",
        category: "Lorem ipsum",
        discipline: "Lorem ipsum",
        url: img,
        licenseNumber: 4
    }, {
        name: "Lorem Ipsum3",
        category: "Lorem ipsum",
        discipline: "Lorem ipsum",
        url: img,
        licenseNumber: 5
    }, {
        name: "Lorem Ipsum3",
        category: "Lorem ipsum",
        discipline: "Lorem ipsum",
        url: img,
        licenseNumber: 6
    }])

    //llamada axios a la base de datos

  return (
    <div className='athletes'>
        {athletes.map((athlete,id) => (
            <Athlete key={id} athlete={athlete}/>
        ))}
    </div>
  )
}

export default Athletes