import React, { useState } from 'react'
import "./NavbarRespo.css"
import { IoIosArrowDown } from "react-icons/io"
import { FaBars } from "react-icons/fa";

const NavbarRespo = () => {
    let [mode, setMode] = useState("close")
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    function handleDropdownClick(e) {
        mode == "close" ? setMode("open") : setMode("close")
    }

    const handleShowNavbar = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-icons'>
                <button className='navbar-btn' onClick={handleShowNavbar}>
                    <FaBars />
                </button>
                <div className='navbar-logo'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Escudo_de_Villaviciosa.svg/350px-Escudo_de_Villaviciosa.svg.png" alt="villaviciosa logo" />
                </div>
            </div>
            <div className={`navbar-elements ${isNavExpanded && 'active'}`}>
                <ul className='navbar-ul'>
                    <a href="/"><li>Inicio</li></a>
                    <a href=""><li>Competiciones</li></a>
                    <li onClick={handleDropdownClick}>Info. del club <IoIosArrowDown /></li>
                    <ul className={`navbar-ul-dropdown ${mode}`} >
                        <a href=""><li>Historia</li></a>
                        <a href=""><li>Palmarés</li></a>
                        <a href=""><li>Perfiles de los atletas</li></a>
                    </ul>
                    <a href="/ContactPage"><li>Contacto</li></a>
                </ul>
            </div>
            <div className='navbar-bar'></div>
        </nav>
    )
}

export default NavbarRespo