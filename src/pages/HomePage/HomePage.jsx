import React from "react";
import "./style.css"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SliderMain from "../../components/SliderComponent/SliderMain";
import  slider1  from "../../Pictures/slider1.webp";
import  slider2  from "../../Pictures/slider2.webp";
import slider3  from "../../Pictures/slider3.webp";
import slider4  from "../../Pictures/slider4.webp";
import slider5  from "../../Pictures/slider5.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
const HomePage = () => {
    const arr = ["PC văn phòng", "PC Gamming", "Server", "Linh kiện máy tính", "Thiết bị mạng" , "IOT Control", "Digital Marketing"]
    return(
    <>
        <HeaderComponent />
        <SliderMain arrImages= {[slider1, slider2, slider3, slider4, slider5]} />
        <div style={{marginTop:"20px", display:"flex", alignContent: "center", gap:"20px", height:"100px"}}>
            <CardComponent />
        </div>
    </>
    )

}
export default HomePage;