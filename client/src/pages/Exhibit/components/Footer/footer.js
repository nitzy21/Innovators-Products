import React from 'react'
import { Footer } from './footer-styles'
import Logo from  '../../assets/nu_logo.png'

const footer = () => {
    return (
        <Footer>
             <img src={Logo} alt="Logo" ></img>
            <div className="logo-name">
                <span>NU INNOVATION TECH HUB<br/><font color="#F8D024">Center for Innovation and Entrepreneurship</font></span>
            </div>
        </Footer>
    )
}

export default footer
