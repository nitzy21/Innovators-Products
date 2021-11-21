import React from 'react'

import {
    Nav, 
    NavbarContainer,
    LogoContainer,
    NavItem,
    NavMenu,
    NavLinks,

} from './navbar-styles'
import Logo from  '../../assets/nu_logo.png'
import {GiShoppingCart} from 'react-icons/gi'

const Navbar = () => {
    return (
        <>
       
        <Nav>
            <NavbarContainer>
                <LogoContainer>
                    <img src={Logo} alt="Logo" ></img>
                    <div className="logo-name">
                        <span>NU INNOVATION TECH HUB<br/><font color="#F8D024">Center for Innovation and Entrepreneurship</font></span>
                    </div>
                </LogoContainer>
                <NavMenu >
                    <NavItem>
                        <NavLinks exact to="/">Product</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to="/">Innovators</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to="/" >Exhibit </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to="/" >About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks exact to="/" >Contact Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <GiShoppingCart className="cart"/>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
