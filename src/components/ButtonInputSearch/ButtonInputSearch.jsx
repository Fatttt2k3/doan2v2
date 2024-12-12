import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const {
        size , placeholder, textButton,
        bordered, backgroundColorInput = "#fff",
        backgroundColorButton="rgb(13, 92, 182)",
        colorButton = "fff",
        borderRadius = "1px"

    } = props
  return (
    <div style={{display:"flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{backgroundColor:backgroundColorInput, borderRadius:borderRadius }}
       />
      <ButtonComponent
       size={size} 
       style={{backgroundColor:backgroundColorButton, borderRadius:borderRadius }}
       icon={<SearchOutlined style={{color:"#fff"}} color={colorButton} />} 
       textButton = {textButton}
       />
    </div>
  )
}

export default ButtonInputSearch
