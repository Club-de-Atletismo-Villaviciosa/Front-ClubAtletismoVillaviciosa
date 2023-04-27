import "./ButtonToForm.css";
import FormMain from "../FormMain/FormMain";
import React, { useState } from 'react'

function ButtonToForm(){

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownClick = () => {
      setIsOpen(!isOpen);
    };



return(
    <div className="buttonToForm">
        <button onClick={handleDropdownClick}><span className="buttonToForm-span">Publicar una actividad</span></button>
        <div className={`formDropdown ${isOpen ? 'open' : 'close'}`}>
            <FormMain/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
    </div>
)

}

export default ButtonToForm