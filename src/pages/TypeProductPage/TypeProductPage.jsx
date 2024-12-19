import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Row } from 'antd'

const TypeProductPage = () => {
  return (
    <Row style={{padding:"0 50px", marginTop:"20px"}}>
        <Col span={5} style={{}}>
        <NavBarComponent />
        </Col>
        <Col span={19} style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
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
            <CardComponent />

        </Col>
    </Row>
  )
}

export default TypeProductPage
