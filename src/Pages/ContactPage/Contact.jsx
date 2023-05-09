import React from 'react'
import ContactForm from '../../Components/Contact/ContactForm'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css';

const Contact = () => {
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

export default Contact