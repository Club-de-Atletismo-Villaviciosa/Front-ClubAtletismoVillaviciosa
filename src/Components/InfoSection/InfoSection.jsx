import React, { useEffect, useState } from 'react'
import "./InfoSection.css"
import { MdModeEditOutline } from "react-icons/md"
import Athletes from '../Athletes/Athletes';
import ButtonToForm from '../ButtonToForm/ButtonToForm';
import FormList from '../Forms/FormListOfHonors/FormList';
import CallAxiosAthletes from '../../Services/CallAxiosAthletes';
import { AuthContext } from '../../Services/AuthContext';
import { useContext } from 'react';

function InfoSection() {
  let [palmares, setPalmares] = useState([{ description: "" }]);
  let [editForm, setEditForm] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [checkEdit, setCheckEdit] = useState(false);
  let {isLogged} = useContext(AuthContext)

  function handleAthleteEdit(athlete) {
    setEditForm(athlete)
    setIsOpen(true)
  }

  function handlePalmaresEdit() {
    setCheckEdit(!checkEdit);
  }

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    CallAxiosAthletes().getListOfHonors()
      .then((data) => {
        console.log(data)
        if (data.length == 0 || data[0].description == null ||  data[0].description == "") {
          return setCheckEdit(!checkEdit);
        }
        setPalmares(data)
       
      })
      .catch((error) => console.error(error))
  }, []);

  return (
    <div className='infoSection'>
      <img src="" alt="" />
      <div className='infoSection-description'>
        <h2>Historia del club</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Esto es una prueba de estar justificado o no ñasdñoiujasdfò òasdujfn asfoàsndf oàsudf asfouiasdf asfosaf asdfuisdjdjdjd uid uid nd uid dfàsdfòasfo id id faàsdjf isdf adfi id di ia asdifsd fi di fasdifa n"</p>
      </div>
      <div className='infoSection-description'>
        <h2>Palmarés {isLogged && <span onClick={handlePalmaresEdit}><MdModeEditOutline color='gray' size={20} /> <small className='small'>(editar)</small></span>}</h2>
        <div className={`formListofHonors ${checkEdit ? 'open' : 'close'}`}>
          <FormList editForm={palmares[0]} customClass={checkEdit} />
        </div>
        <p className="pre-wrap">{palmares[0].description}</p>
      </div>
      {isLogged && <ButtonToForm type="athlete" editForm={editForm} handleDropdownClick={handleDropdownClick} isOpen={isOpen} />}
      <Athletes handleEdit={handleAthleteEdit} />
    </div>
  )
}

export default InfoSection