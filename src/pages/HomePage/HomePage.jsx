import React from "react";
import "./style.css"
import SliderMain from "../../components/SliderComponent/SliderMain";
import  slider1  from "../../Pictures/slider1.webp";
import  slider2  from "../../Pictures/slider2.webp";
import slider3  from "../../Pictures/slider3.webp";
import slider4  from "../../Pictures/slider4.webp";
import slider5  from "../../Pictures/slider5.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Flex } from "antd";

const HomePage = () => {
    const arr = ["PC văn phòng", "PC Gamming", "Server", "Linh kiện máy tính", "Thiết bị mạng" , "IOT Control", "Digital Marketing"]
    return(
    <div style={{width:"100%"}}>
        <SliderMain arrImages= {[slider1, slider2, slider3, slider4, slider5]} />
        
        <div style={{marginLeft:"60px", display:"flex", gap:"20px", height:"fit-content",  flexWrap: "wrap"}}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />

        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>        
        <ButtonComponent  textButton= "Xem thêm" type= "outline" styleButton={{border:"1px soild rgb(11,116,229)", color: "rgb(11,116,229)", width: "240px", height: "38px", borderRadius: "4px"}}/>
</div>
        <div>
            <NavBarComponent />
        </div>
    </div>
    )

}
export default HomePage;