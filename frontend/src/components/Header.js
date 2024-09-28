import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import burgerIcon from '../assets/hamburger.png';
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaVk } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <NavLink to="/">
                        <img src={logo} alt="JobMap Europe" />
                    </NavLink>
                </div>

                {/* Десктопное меню */}
                <nav className="header__nav">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/jobs" className={({ isActive }) => isActive ? 'active' : ''}>
                                Вакансии
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>
                                О нас
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : ''}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Мобильное бургерное меню */}
                <div className="header__burger" onClick={toggleMenu}>
                    <img src={burgerIcon} alt="Menu" className="burger-icon" /> {/* Иконка трех полосок */}
                </div>
            </header>

            {/* Мобильное меню */}
            <nav className={isMenuOpen ? 'mobile-nav open' : 'mobile-nav'}>
                <div className="mobile-nav__content">
                    <div className="mobile-nav__close" onClick={toggleMenu}>×</div> {/* Крестик для закрытия */}
                    <div className="mobile-nav__logo">
                        <NavLink to="/" onClick={toggleMenu}>
                            <img src={logo} alt="JobMap Europe" />
                        </NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={toggleMenu}>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/jobs" onClick={toggleMenu}>Вакансии</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" onClick={toggleMenu}>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" onClick={toggleMenu}>Контакты</NavLink>
                        </li>
                    </ul>
                    <div className="social-links">
                    {
                        //<a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                        //    <FaTelegramPlane />
                        //</a>
                        //<a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                        //    <FaWhatsapp />
                        //</a>
                    }
                        <a href="https://vk.com/club227392148" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaVk />
                        </a>
                        <a href="https://www.instagram.com/job_map_agency?igsh=MTBjcjB5dmp6anBkaw==" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
