import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactPage.css';
import Header from '../../Components/Header/Header';

const ContactPage = () => {
    return (
        <div>
            <Navbar />

            <div className='main'>
            <Header/>
                <div className="wrapper">
                    <ContactForm />
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default ContactPage