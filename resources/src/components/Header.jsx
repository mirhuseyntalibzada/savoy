import React, { useState } from 'react'
import logo from '../img/logo@2x.png'

function Header() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive)
    }

    return (
        <section id='header'>
            <div className='header-container'>
                <div className='ham-menu-cont'>
                    <div className={`ham-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navigation-cont">
                        <ul>
                            <li><a href="#!">Shop</a></li>
                            <li><a href="#!">Categories <span>NEW</span></a></li>
                            <li><a href="#!">Pages</a></li>
                            <li><a href="#!">Elements</a></li>
                        </ul>
                    </div>
                </div>
                <div className="img-container">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <div>
                        <span><i className="fa-regular fa-heart"></i></span>
                    </div>
                    <div>
                        <span>Sign in</span>
                    </div>
                    <div>
                        <span>Cart</span>
                        <span>0</span>
                        <span>(0)</span>
                    </div>
                </div>
            </div>
            <div className={`mobile-navigation ${isActive ? 'is-down' : ''}`} onClick={toggleMenu}>
                <div>
                    <ul>
                        <li>
                            <a href="#!">Shop</a>
                            <span>+</span>
                        </li>
                        <li>
                            <a href="#!">Categories <span>NEW</span></a>
                            <span>+</span>
                        </li>
                        <li>
                            <a href="#!">Pages</a>
                            <span>+</span>
                        </li>
                        <li>
                            <a href="#!">Elements</a>
                            <span>+</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#!">Sign in</a></li>
                        <li><a href="#!">Wishlist</a></li>
                    </ul>
                </div>
                <div>
                    <span><i className="fa-brands fa-facebook-f"></i></span>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-x-twitter"></i></span>
                </div>
            </div>
        </section>

    )
}

export default Header