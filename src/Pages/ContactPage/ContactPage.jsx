import React from 'react'
import ContactForm from '../../Components/Contact/ContactForm'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div>

            <Navbar />

            <div className='mainContact'>
                <ContactForm />                
            </div>

        </div>
    )
}

export default ContactPage