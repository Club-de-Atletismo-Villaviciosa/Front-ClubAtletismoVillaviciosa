import React, { useState } from 'react'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Services/AuthContext'
import { FaBars } from "react-icons/fa";
import { BiLogOut} from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import Cookies from 'js-cookie'
import logoAVI_BN from "../../assets/img/logoAVI_BN.png";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    let [mode, setMode] = useState("close")
    let {isLogged, setIsLogged} = useContext(AuthContext)

    function handleDropdownClick(e) {
        mode == "close" ? setMode("") : setMode("close")
    }

    const handleShowNavbar = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    function handleLogout(){
        Cookies.remove("user");
        setIsLogged(false)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-icons'>
                <button className='navbar-btn' onClick={handleShowNavbar}>
                    <FaBars />
                </button>
                <div className='navbar-logo'>
                    <Link to={"/"}><img  src={logoAVI_BN} alt="villaviciosa logo" /></Link>
                </div>
            </div>
            <div className={`navbar-elements ${isNavExpanded ? 'active': 'inactive'}`}>
                <ul className='navbar-ul'>
                    <Link to={"/"}><li>Inicio</li></Link>
                    <Link to={"/calendarPage"}><li>Competiciones</li></Link>
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
            <div className="navbar-btnLogDiv">
                {isLogged ? <BiLogOut onClick={handleLogout} color='white' className='navbar-btnLogOut'/> : <Link to ={"/loginPage"}><VscAccount color='white' className='navbar-btnLogOut' /></Link>}
            </div>
            
        </nav>
    )
}

export default Navbar