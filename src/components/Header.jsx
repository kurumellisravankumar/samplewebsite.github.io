import React from 'react'
import logo from "../assets/logo2.png"


import "../styless/header.scss"

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-lists">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">serivces</a></li>
                            <li><a href="#">faq's</a></li>
                            <li><a href="#">contact</a></li>

                        </ul>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
