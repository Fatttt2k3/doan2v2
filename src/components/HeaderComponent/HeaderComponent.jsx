import React from "react";
import { Col, Row } from 'antd';
import './style.css';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import Headerlogo1 from "./logov1.jpg";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import Mainmenu from "../Menu/Mainmenu";

const HeaderComponent = () => {
    return (
        <div>
            <Row className="header" gutter={[16, 16]} align="middle">
                {/* Logo */}
                <Col xs={24} sm={8} md={6} className="header-logo">
                    <img src={Headerlogo1} alt="Logo" className="header-logo-img" />
                </Col>

                {/* Search bar */}
                <Col xs={24} sm={16} md={12} className="header-search">
                    <ButtonInputSearch
                        size="large"
                        textButton="Tim kiếm"
                        placeholder="Tìm gì dọ"
                        enterButton="Search"
                        style ={{width:"100%", maxwidth: "600px"}}
                    />
                </Col>

                {/* User and Shopping Cart */}
                <Col xs={24} md={6} className="header-icons" style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                    {/* User */}
                    <div className="header-user">
                        <div className="user-header-icon">
                            <UserOutlined />
                        </div>
                        <div>
                            <span className="span-user-text">Đăng nhập/Đăng ký</span>
                            <div>
                                <span className="span-user-text">Tài khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </div>

                    {/* Shopping Cart */}
                    <div className="header-shopping">
                        <div className="shopping-header-icon">
                            <ShoppingCartOutlined />
                        </div>
                        <div>
                            <span className="span-shopping-text">Giỏ hàng</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Mainmenu />
            </Row>
        </div>
    );
};

export default HeaderComponent;
