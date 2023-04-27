import './App.css';
import ContactForm from './Components/Contact/ContactForm';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      
      <ContactForm />
      <Footer />
      
    </div>
  );
}

export default App;
