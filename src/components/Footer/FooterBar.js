import React from 'react'
import Logo from './northerncollegelogo.png'
import './FooterBar.css'

const Footer = () => {
    return (
        <div>
            <div className="footerbar">
                <img className="footerLogo" src={Logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Footer
