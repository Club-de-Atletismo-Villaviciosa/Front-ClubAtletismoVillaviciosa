import React, { useState } from 'react'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io"

function Navbar() {
    let [mode, setMode] = useState("close")

    function handleDropdownClick(e) {
        mode == "close"? setMode("open") : setMode("close")
        
    }

    return (
        <nav  className='navbar'>
            <div className='navbar-logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Escudo_de_Villaviciosa.svg/350px-Escudo_de_Villaviciosa.svg.png" alt="villaviciosa logo" />
            </div>
            <ul className='navbar-ul'>
                <a href="/"><li>Inicio</li></a>
                <a href=""><li>Competiciones</li></a>
                <li onClick={handleDropdownClick}>Info. del club <IoIosArrowDown /></li>
                <ul data-testid="navbar-dropdown" className={`navbar-ul-dropdown ${mode}`} >
                    <a href=""><li>Historia</li></a>
                    <a href=""><li>Palmarés</li></a>
                    <a href=""><li>Perfiles de los atletas</li></a>
                </ul>
                <a href="/ContactPage"><li>Contacto</li></a>
            </ul>
            <div className='navbar-bar'></div>
        </nav>
    )
}

export default Navbar