import React from "react";
import TypeProduct from "../TypeProduct/TypeProduct";
import "./Mainmenu.css"
const Mainmenu = () => {
    const arr = ["PC văn phòng", "PC Gamming", "Server", "Linh kiện máy tính", "Thiết bị mạng" , "IOT Control", "Digital Marketing"]
    return(
    
        <div style={{ width:"100%", alignItems:"center"}}>
            <div className="WrapperTypeProduct">
        {arr.map((item) =>{
    return(
    <TypeProduct name={item} key={item} className="List-item-type"/>
    )
    })}
        </div>
    </div>
    
    )

}
export default Mainmenu;