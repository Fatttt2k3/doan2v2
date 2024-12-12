import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderMain = ({arrImages}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      };
  return (
    <div style={{backgroundColor:"rgb(230, 230, 230)"}}>
    <div style={{width: "1000px", margin:"0 auto"}}>
    <Slider settings={settings}>
        {arrImages.map((image) => {
          return(
            <h3>
            <Image src={image} alt="slider" style={{width: "1000px", margin:"0 auto"}} />
            </h3>
          )
        })}
    </Slider>
    </div>
    </div>
  )
}


export default SliderMain
