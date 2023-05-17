import React, { useState } from 'react'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom'

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
                <Link to={"/"}><li>Inicio</li></Link>
                <Link to={"/"}><li>Competiciones</li></Link>
                <li className="click" onClick={handleDropdownClick}>Info. del club<IoIosArrowDown /></li>
                <ul data-testid="navbar-dropdown" className={`navbar-ul-dropdown ${mode}`} >
                    <Link to={"/InfoPage"}><li>Historia</li></Link>
                    <Link to={"/InfoPage"}><li>Palmarés</li></Link>
                    <Link to={"/InfoPage"}><li>Perfiles de los atletas</li></Link>
                </ul>
                <Link to="/ContactPage"><li>Contacto</li></Link>
            </ul>
            <div className='navbar-bar'></div>
        </nav>
    )
}

export default Navbar