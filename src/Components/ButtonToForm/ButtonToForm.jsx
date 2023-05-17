import "./ButtonToForm.css";
import FormMain from "../Forms/FormMain/FormMain";
import React, { useState } from 'react'

function ButtonToForm({type, editForm, handleDropdownClick, isOpen}){

    



return(
    <div className="buttonToForm">
        <button data-testid="buttonToForm-button" className="buttonToForm-button" onClick={handleDropdownClick}><span className="buttonToForm-span">{type == "athlete"? "Publicar un/a atleta" : "Publicar una actividad"}</span></button>
        <div data-testid="button-dropdown" className={`formDropdown ${isOpen ? 'open' : 'close'}`}>
            <FormMain type={type} editForm={editForm} />
        </div>
    </div>
)

}

export default ButtonToForm