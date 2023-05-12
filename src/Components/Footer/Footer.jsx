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
                <div>
                    <p>Correo electrónico</p>
                </div>
                <div>
                    <div>
                    © 2023 Copyrigth
                    </div>
                    <div>
                        Factoría F5 (Christian Carbajo, Salah Righab, Aurino Llera, Javier Bres)
                    </div>
                </div>

                <p>Cookies</p>

            </footer>
        </div>
    )
}

export default Footer