import React, { useEffect, useState } from 'react'
import "./InfoSection.css"
import { MdModeEditOutline } from "react-icons/md"
import Athletes from '../Athletes/Athletes';
import ButtonToForm from '../ButtonToForm/ButtonToForm';
import FormList from '../Forms/FormListOfHonors/FormList';
import CallAxiosAthletes from '../../Services/CallAxiosAthletes';

function InfoSection() {
  let [palmares, setPalmares] = useState([{ description: "" }]);
  let [editForm, setEditForm] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [checkEdit, setCheckEdit] = useState(false);


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
        console.log(data[0].description)
        if (data.length == 0 || data[0].description == null ||  data[0].description == "") {
          return setCheckEdit(!checkEdit);
        }
        setPalmares(data)
        console.log(data)
      })
      .catch((error) => console.error(error))
  }, []);

  return (
    <div className='infoSection'>
      <img src="" alt="" />
      <div className='infoSection-description'>
        <h2>Historia del club</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur molestie blandit. Maecenas rutrum mauris sit amet urna pulvinar feugiat. Cras non nisl quis enim iaculis egestas. Vivamus vehicula tristique hendrerit. Phasellus pharetra sapien vitae arcu porta tempor. Suspendisse quis ante venenatis, efficitur ipsum congue, posuere nibh. Morbi non ante lacus. In hac habitasse platea dictumst.</p>
      </div>
      <div className='infoSection-description'>
        <h2>Palmarés <span onClick={handlePalmaresEdit}><MdModeEditOutline color='gray' size={20} /> <small className='small'>(editar)</small></span></h2>
        <div className={`formListofHonors ${checkEdit ? 'open' : 'close'}`}>
          <FormList editForm={palmares[0]} customClass={checkEdit} />
        </div>
        <p className="pre-wrap">{palmares[0].description}</p>
      </div>
      {/* <button>Publicar un/a atleta</button> */}
      <ButtonToForm type="athlete" editForm={editForm} handleDropdownClick={handleDropdownClick} isOpen={isOpen} />
      <Athletes handleEdit={handleAthleteEdit} />
    </div>
  )
}

export default InfoSection