import React from 'react'
import "./Font.css";

const Font = () => {
    return (
        <div>
            <p className='playbill'>El Gaitero Atletismo (Playbill)</p>
            <p className='cambria'>El Gaitero Atletismo (Cambria)</p>
            <p className='centaur'>Atletismo (Centaur)</p>
            <p className='playbill'>El Gaitero <span className='centaur'>Atletismo </span>(Playbill-Centaur)</p>
            <p className='cambria'>El Gaitero <span className='centaur'>Atletismo </span>(Cambria-Centaur)</p>
        </div>
    )
}

export default Font