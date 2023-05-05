import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_arjzlfl', 'template_97z06zi', form.current, 'O4lisxogcfKr3Z7J9')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado')
            }, (error) => {
                console.log(error.text);
                alert('Mensaje sin enviar')
            });

            e.target.reset();
    };    

    return (
        <div className='container'>
            <div>
                <h1>CLUB ATLETISMO VILLAVICIOSA</h1>
            </div>
            <form className='contacform' ref={form} onSubmit={sendEmail}>
            <h1>CONTACTO</h1>
                <div className='form-item'>
                    <label for="name">Nombre:*</label><br />
                    <input type="text" name="user_name" id='user_name' maxLength="30" 
                    placeholder='Inserta tu nombre' autoFocus required />
                </div>
                <div className='form-item'>
                    <label for='email'>Email:*</label><br />
                    <input type="email" name="user_email" id='user_email' pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        placeholder='Inserta tu correo electrónico' required />
                </div>
                <div className='form-item'>
                    <label>Consulta:*</label><br /> 
                    <textarea name="message" rows="10" cols="30" placeholder='Mensaje' required >
                    </textarea>
                </div>
                <div className='form-item'>
                    <input className='inputForm' type="submit" name='submit' id='submit' value="Enviar consulta" />
                </div>

                <div>
                    <ul className='contactInfo'>
                        <li>Dirección: C/ Pintor Guillermo Simon (Villaviciosa) Asturias</li>
                        <li>Email: clubatletismovillaviciosa@gmail.com</li>
                    </ul>
                </div>

                <div className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.2608046790697!2d-5.432351342090198!3d43.48549702484571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd366d0a47d91b0d%3A0xc37e8fd7ffa6589c!2spista%20de%20atletismo%20municipal!5e1!3m2!1sca!2ses!4v1682414921244!5m2!1ses!2ses"
                        title="mapGoogle" width="670" height="320" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>                     
                </div>

            </form>

        </div>
    )
}

export default ContactForm