import "./Carousel.css"
import AthleteText from "./AthleteText"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  return (
    <div className="slider">
      <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
        {AthleteText.map((text) => (
          <div className="opinion" key={text.id}>
            <p>{text.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel