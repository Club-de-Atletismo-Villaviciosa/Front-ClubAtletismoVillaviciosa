import React from 'react'
import El_Gaitero_logo from '../../assets/img/El_Gaitero_logo.svg';
import factoriaF5_logo from '../../assets/img/factoriaF5_logo.png';
import './Footer.css';

const Footer = () => {

    return (        
            <footer>
                <div className='footer-main'>
                    <div className='footer-contact'>                        
                            <a href="/ContactPage">Contacto</a>
                            <p>elgaiteroatletismo@gmail.com</p>
                            <p>C/ Pintor Guillermo Simon (Villaviciosa) Asturias</p>                        
                    </div>
                    <div className='footer-mainPartners'>
                        <p className='phrase'>Patrocinado por:</p>                        
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
                    <div className='footer-coders'>
                        <img className='footer-f5Logo' src={factoriaF5_logo} />
                        <p>(Christian Carbajo, Salah Raghib, Aurino Llera, Javier Bres)</p>
                    </div>
                </div>

                <div className='footer-copyright'>
                    <p>©2023 Copyrigth</p>
                    <a className='footer-policy' href="/PolicyPage"><p>Policy and Private</p></a>
                </div>
            </footer>       
    )
}

export default Footer