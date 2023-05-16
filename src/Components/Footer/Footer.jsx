import React from 'react'
import El_Gaitero_logo from '../../assets/img/El_Gaitero_logo.svg';
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <footer>
                <p className='phrase'>Patrocinado por:</p>
                <div className='footer'>
                    <div className='footer-footerPartners'>
                        <div className='footer-gaitero'>
                            <img className='gaitero' src={El_Gaitero_logo} alt="Sidra El Gaitero" />
                            <p>Sidra El Gaitero</p>
                        </div>
                        <div className='footer-ayto'>
                            <img className='ayto' src="https://upload.wikimedia.org/wikipedia/commons/7/79/Escudo_de_Villaviciosa.svg"
                                alt="Escudo Villaviciosa" />
                            <p>Ayuntamiento de Villaviciosa</p>
                        </div>
                    </div>
                </div>
                <div className='footer-details'>
                    <div className='footer-email'>
                        <p>elgaiteroatletismo@gmail.com</p>
                    </div>
                    <div className='footer-coders'>
                        <p><span className='f5'>factoría F5</span> (Christian Carbajo, Salah Raghib, Aurino Llera, Javier Bres)</p>
                    </div>
                    <div className='footer-copyright'>
                        <p>© 2023 Copyrigth</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer