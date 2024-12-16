import React from 'react'
import  {Checkbox, Rate} from 'antd';
import "./style.css"

const NavBarComponent = () => {
    const onChange = () => {}
    
    const renderContent =(type, options) => {
        switch (type){
            case "text":
                return options.map((option) => {
                    return (
                        <div className='WrapperTextValue'>
                            {option}
                        </div>
                    )
                })
                case 'checkbox': 
                 return (
                 <Checkbox.Group style={{ width: '100%', display: "flex" , flexDirection:"column", gap: "12px"}} onChange={onChange}>
                    {options.map((option) => {
                    return(
                            <Checkbox style={{ marginLeft:0}} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
               </Checkbox.Group>
               )
                case 'start': 
                    return options.map((option) => {
                       return(
                           <div style={{display:"flex", gap:"12px"}}>
                           <Rate style={{fontSize:"12px"}} disabled defaultValue={option}  />
                           <span>Từ {option} sao</span>
                           </div>
                       )
                       })
                       case 'price': 
                       return options.map((option) => {
                          return(
                              <div style={{padding: "4px" ,borderRadius: "10px", backgroundColor:"#ccc", width:"fit-content"}}>
                                  {option}
                              </div>
                          )
                          })
                  

            default:
                return {}
        }
    }
    
  return (
    <div style={{backgroundColor: "#ccc", borderRadius: "10px", width:"fit-content", padding:"10px"}}>
        <div className='WrapperLabelText'>Lable</div>
        <div className='WrapperContent'>
        {renderContent("checkbox", 
        [
            {value: 'a', label: 'A'},
            {value: 'b', label: 'B'},
            ])}
        </div>
        <div className='WrapperContent'>
        {renderContent("start", 
        [ 3,4,5

            ])}
        </div>
        <div className='WrapperContent'>
        {renderContent("price", 
        [ "Từ 0đ đến 100.000đ",
        "Từ 100.000đ đến 1.000.000đ",
        "Từ 1.000.000đ đến 5.000.000đ",
        "Từ 5.000.000đ đến 10.000.000đ",
            ])}
        </div>
    </div>
  )
}

export default NavBarComponent
