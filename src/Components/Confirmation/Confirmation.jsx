import React from 'react'
import "./Confirmation.css";

function Confirmation({ type, handleAction, handleClose }) {

    return (
        <div className='confirmation'>
            <div className='confirmation-div'>
                {type == "delete" ? <p>¿Desea eliminar definitivamente este elemento?</p> : <p>¿Está seguro de que desea guardar los cambios realizados en este elemento?</p>}
                <div className='confirmation-buttons'>
                    <button className="action-button" onClick={() => { handleAction() }}>Confirmar</button>
                    <button className="close-button" onClick={handleClose}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation