import React from 'react'
import El_Gaitero_logo from '../../assets/img/El_Gaitero_logo.svg';
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <footer>
                <div className='footer-p'>
                    <p>Patrocinado por:</p>
                </div>
                <div>
                    <img className='gaitero' src={El_Gaitero_logo} alt="Sidra El Gaitero" width="100" />                    
                </div>
                
            </footer>
        </div>
    )
}

export default Footer