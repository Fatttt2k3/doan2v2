import React from 'react'
import mypic from './kuromi.png'
import './DefaultComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponent />
        {children}
       <div>
        <h1 className='title-df'>TRANG KHÔNG TỒN TẠI</h1>
        <img src={mypic}  className='bg-df' />
    </div>
    </div>
  )
}

export default DefaultComponent

