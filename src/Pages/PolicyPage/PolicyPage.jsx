import React from 'react'
import './PolicyPage.css';
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function PolicyPage() {
    return (
        <>
        <Navbar/>
        <div className='main'>
        <Header/>
        
    <div className="privacy-policy">
        
      <h2 className='title_policy'>POLÍTICA DE PRIVACIDAD</h2>

    <section>
      <h2>Información recopilada</h2>
      <p className='p_policy'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sapien rutrum,
        aliquet justo et, semper erat. Integer a arcu justo. Fusce consectetur, lacus non dignissim tristique,
        purus urna ultricies mi, id ultricies tellus nibh nec nulla.
        Quisque sodales eleifend lectus, nec fringilla turpis volutpat eu. Mauris at semper tellus.
        Aliquam id sapien diam. Sed ut felis et eros lobortis cursus ut a nunc.
      </p>   
    </section>

    <section>
      <h2>Uso de la información</h2>
      <p className='p_policy'>
        Sed feugiat urna id est commodo cursus. Nam rutrum lorem quis dolor semper, at bibendum sapien
        commodo. Nulla commodo, mi et sagittis scelerisque, neque orci gravida lacus, id fermentum tellus ex et mauris.
        Vestibulum rhoncus, mauris non luctus sagittis, odio tellus fringilla dolor, non tincidunt tellus est sed enim.
        Duis suscipit odio libero, vitae eleifend arcu dignissim eget. In pretium lorem vel sem consectetur, eget vulputate nulla rutrum.
      </p>    
    </section>

    <section>
      <h2>Divulgación de información</h2>
      <p className='p_policy'>
        Phasellus eget mi ac lorem dignissim tempus. Mauris fringilla semper leo, sed luctus arcu.
        In eu sapien leo. Aliquam erat volutpat.
        Vestibulum ut quam at sem venenatis iaculis. Sed porttitor libero quis sem eleifend dignissim.
        Fusce a pulvinar odio. Quisque condimentum, tortor in tristique feugiat, dolor dui fringilla neque,
        a facilisis enim erat non metus.
      </p>
    </section>
  </div>
  <Footer/>
  </div>
  </>

  );

}

export default PolicyPage