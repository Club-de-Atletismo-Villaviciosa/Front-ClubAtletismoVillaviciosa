import PhotoMainPage from "../../Components/PhotoMainPage/PhotoMainPage"
import Carousel from "../../Components/Carousel/Carousel"
import Navbar from "../../Components/Navbar/Navbar"
import ButtonToForm from "../../Components/ButtonToForm/ButtonToForm"
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
            <Carousel />
            <LastThreeNews/>
            <ButtonToForm />
            <MainSection />
            <Footer />
        </div>
        </div>
        
    )
}

export default MainPage