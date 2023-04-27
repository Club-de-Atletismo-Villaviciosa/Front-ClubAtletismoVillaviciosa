import React from 'react'
import El_Gaitero_logo from '../../assets/img/El_Gaitero_logo.svg';
import Escudo_Villaviciosa from '../../assets/img/Escudo_Villaviciosa.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <p>Patrocinado por:</p>
                <div className='logos'>
                    <img className='gaitero' src={El_Gaitero_logo} alt="Sidra El Gaitero" width="150" />
                    <img src={Escudo_Villaviciosa} alt="Escudo Villaviciosa" width="150" />                  
                </div>
            </footer>
        </div>
    )
}

export default Footer