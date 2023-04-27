import React, { useState } from 'react'
import './ContactForm.css';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <div>
            
            <form className='contacform' onSubmit={handleSubmit}>
            <h1>CONTACTO</h1>
                <div className='nameForm'>
                    <label for="name">Nombre:*</label>
                    <input type="text" maxLength="30" placeholder='Inserta tu nombre' autoFocus required
                        onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div className='emailForm'>
                    <label for='email'>Email:*</label>
                    <input type="email" pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                        name='email' placeholder='Inserta tu correo electrónico' required
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className='textForm'>
                    <label>Consulta:*</label>
                    <textarea rows="6" name="comment" required onChange={(event) => { setTextArea(event.target.value) }}>
                    </textarea>
                </div>
                <div>
                    <input type="submit" value="Enviar consulta" />
                </div>

                <div>
                    <ul className='contactInfo'>
                        <li>Dirección: C/ Pintor Guillermo Simon (Villaviciosa) Asturias</li>
                        <li>Email: clubatletismovillaviciosa@gmail.com</li>
                    </ul>
                </div>

                <div className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.2608046790697!2d-5.432351342090198!3d43.48549702484571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd366d0a47d91b0d%3A0xc37e8fd7ffa6589c!2spista%20de%20atletismo%20municipal!5e1!3m2!1sca!2ses!4v1682414921244!5m2!1sca!2ses"
                        title="mapGoogle" width="450" height="260" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </form>

        </div>
    )
}

export default ContactForm