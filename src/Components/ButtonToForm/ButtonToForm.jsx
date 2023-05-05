import "./ButtonToForm.css";
import FormMain from "../FormMain/FormMain";
import React, { useState } from 'react'

function ButtonToForm({type}){

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownClick = () => {
      setIsOpen(!isOpen);
    };



return(
    <div className="buttonToForm">
        <button onClick={handleDropdownClick}><span className="buttonToForm-span">{type == "athlete"? "Publicar un/a athlete" : "Publicar una actividad"}</span></button>
        <div className={`formDropdown ${isOpen ? 'open' : 'close'}`}>
            <FormMain type={type}/>
        </div>
    </div>
)

}

export default ButtonToForm