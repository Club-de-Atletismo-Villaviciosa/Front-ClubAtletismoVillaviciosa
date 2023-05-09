import React from 'react'
import ContactForm from '../../Components/Contact/ContactForm'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div>

            <Navbar />

            <div className='mainContact'>
                <ContactForm />
                <Footer />
            </div>

        </div>
    )
}

export default ContactPage