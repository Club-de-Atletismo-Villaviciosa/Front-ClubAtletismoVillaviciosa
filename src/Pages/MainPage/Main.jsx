import PhotoMainPage from "../../Components/PhotoMainPage/PhotoMainPage"
import Carousel from "../../Components/Carousel/Carousel"
import Navbar from "../../Components/Navbar/Navbar"
import ButtonToForm from "../../Components/ButtonToForm/ButtonToForm"
import FormMain from "../../Components/FormMain/FormMain"
import "./Main.css"

function Main(){

    return(    
        <div>
            <Navbar/>
        
        <div className="main"> 
            <PhotoMainPage />
            <Carousel />
            <ButtonToForm />
          
        </div>
        </div>
        
    )
}

export default Main