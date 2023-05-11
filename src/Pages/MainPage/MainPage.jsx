import PhotoMainPage from "../../Components/PhotoMainPage/PhotoMainPage"
import Carousel from "../../Components/Carousel/Carousel"
import Navbar from "../../Components/Navbar/Navbar"
import ButtonToForm from "../../Components/ButtonToForm/ButtonToForm"
import FormMain from "../../Components/FormMain/FormMain"
import "./MainPage.css"
import MainSection from "../../Components/MainSection/MainSection"
import LastThreeNews from "../../Components/LastThreeNews/LastThreeNews"
import Footer from "../../Components/Footer/Footer"

function MainPage(){

    return(    
        <div>
            <Navbar/>
        
        <div className="main"> 
            <PhotoMainPage />
            
            <div className="wrapper">
                <Carousel />
                <LastThreeNews/>
                <ButtonToForm />
                <MainSection />
            </div>
            
        </div>
        <Footer/>
        </div>
        
    )
}

export default MainPage