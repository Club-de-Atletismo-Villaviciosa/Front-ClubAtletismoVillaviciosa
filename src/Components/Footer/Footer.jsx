import React from 'react'
import El_Gaitero_logo from '../../assets/img/El_Gaitero_logo.svg';
import './Footer.css';

const Footer = () => {
    
    return (
        <div>
            <footer>
                <p>Patrocinado por:</p>
                <div className='logos'>
                    <img className='gaitero' src={El_Gaitero_logo} alt="Sidra El Gaitero" width="125" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Escudo_de_Villaviciosa.svg" 
                    alt="Escudo Villaviciosa" width="125" />                  
                </div>
            </footer>
        </div>
    )
}

export default Footer