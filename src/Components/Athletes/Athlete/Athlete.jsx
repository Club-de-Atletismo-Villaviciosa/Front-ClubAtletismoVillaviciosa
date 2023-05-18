import React, { useState } from 'react'
import "./Athlete.css"
import { MdModeEditOutline } from "react-icons/md"
import { FaTrashAlt } from "react-icons/fa"
import ApiDeleteService from '../../../Services/ApiDeleteService';
import Confirmation from '../../Confirmation/Confirmation';
import { useContext } from 'react';
import { AuthContext } from '../../../Services/AuthContext';

function Athlete({ athlete, handleEdit }) {
  const [hover, setHover] = useState(false);
  const [confirmation, setConfirmation] = useState(false)
  const [typeConfirmation, setTypeConfirmation] = useState("")
  let { isLogged } = useContext(AuthContext)

  let mode = hover ? "appear" : "notAppear"
  const toggleHover = () => {
    setHover(!hover);
  };

  function handleDelete() {
    ApiDeleteService("http://localhost:8080/api/v1/athlete", athlete.id)
    .then(() => window.location.reload())
    .catch((error) => console.error(error));
    setConfirmation(false)
    // window.location.reload()

  }

  function handleClose() {
    setConfirmation(false)
  }

  function handleClickDelete() {
    setConfirmation(true)
    setTypeConfirmation("delete")
  }



  return (
    <div className='athlete'>
      {confirmation && <Confirmation type={typeConfirmation} athlete={athlete} handleAction={typeConfirmation == "delete"? handleDelete : handleEdit} handleClose={handleClose} />}
      <div className='athlete-img' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <img src={athlete.url} alt="athlete-img" />
        {isLogged && <div className={`athlete-icons ${mode}`}>
          <MdModeEditOutline onClick={()=> {handleEdit(athlete)}} className={`athlete-icon click`} color='#f0f0f0' size={100} />
          <FaTrashAlt onClick={() => {handleClickDelete()}} className={`athlete-icon click`} color='#f0f0f0' size={70} />
        </div>}
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