import React, { useState } from 'react'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { BiLogOut, BiLogIn } from "react-icons/bi";

function Navbar() {
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
                    <Link to={"/"}><li>Inicio</li></Link>
                    <Link to={"/"}><li>Competiciones</li></Link>
                    <li className="click" onClick={handleDropdownClick}>Info. del club<IoIosArrowDown /></li>
                    <ul data-testid="navbar-dropdown" className={`navbar-ul-dropdown ${mode}`} >
                        <Link to={"/InfoPage"}><li>Historia</li></Link>
                        <Link to={"/InfoPage"}><li>Palmarés</li></Link>
                        <Link to={"/InfoPage"}><li>Perfiles de los atletas</li></Link>
                    </ul>
                    <Link className='navbar-contacto' to="/ContactPage"><li>Contacto</li></Link>
                </ul>
            </div>
            <div className='navbar-bar'>                
            </div>
            <div className='navbar-btnLog'>
                <BiLogIn className='navbar-btnLogIn' />
                <BiLogOut className='navbar-btnLogOut' />
            </div>
        </nav>
    )
}

export default Navbar