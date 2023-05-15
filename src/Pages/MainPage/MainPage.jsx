import PhotoMainPage from "../../Components/PhotoMainPage/PhotoMainPage"
import Carousel from "../../Components/Carousel/Carousel"
import Navbar from "../../Components/Navbar/Navbar"
import ButtonToForm from "../../Components/ButtonToForm/ButtonToForm"
import "./MainPage.css"
import MainSection from "../../Components/MainSection/MainSection"

function MainPage(){

    return(    
        <div>
            <Navbar/>
        
        <div className="main"> 
            <PhotoMainPage />
            <Carousel />
            <ButtonToForm />
            <MainSection />
          
        </div>
        </div>
        
    )
}

export default MainPage