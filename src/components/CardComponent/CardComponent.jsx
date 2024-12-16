import React from 'react';
import { Card } from 'antd';
import "../CardComponent/style.css"
import { StarFilled } from '@ant-design/icons';
const { Meta } = Card;

const CardComponent = () => {
  return (  
    <Card
      hoverable
      style={{ width: 240}}
      bodyStyle={{padding:"10px"}}
      cover={<img alt="example" src="https://product.hstatic.net/200000722513/product/artboard_3_b5ccc140878a433db58322a5adeb8b3c_grande.png" />}
    >
    <div className='StyleNameProduct'>
      <h4>PC GVN x MSI Dragon ACE (Intel Core Ultra 9 285K/ VGA RTX 4080 Super)</h4>
    </div>
    <div className='WrapperReportText'>
      <span>5.0 <StarFilled style={{fontSize: "10px", color: "yellow"}} /></span>
      <span>   | Còn hàng</span>
    </div>
    <div className='WrapperPriceText'>
       99.000.000 đ <span className='WrapperDiscountText'>-15%</span>
    </div>
    
    </Card>
  );
};

export default CardComponent;
