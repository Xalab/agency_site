import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';
import PrivacyPolicy from '../assets/docs/PrivacyPolicy.pdf';
import LicenseAgreement from '../assets/docs/LicenseAgreement.pdf';
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaVk } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="JobMap Logo" className="footer-logo" />
                </div>
                <div className="footer-center">
                    <nav className="footer-nav">
                        <NavLink exact to="/" activeClassName="active" className="footer-link">
                            Главная
                        </NavLink>
                        <NavLink to="/jobs" activeClassName="active" className="footer-link">
                            Вакансии
                        </NavLink>
                        <NavLink to="/about-us" activeClassName="active" className="footer-link">
                            Про нас
                        </NavLink>
                        <NavLink to="/contacts" activeClassName="active" className="footer-link">
                            Контакты
                        </NavLink>
                    </nav>
                </div>
                <div className="footer-right">
                    <p className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaTelegramPlane />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaWhatsapp />
                        </a>
                        <a href="https://vk.com/club227392148" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaVk />
                        </a>
                        <a href="https://www.instagram.com/galteamelyushin?igsh=MWx3cHNudGhtbGc4ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaInstagram />
                        </a>
                    </p>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <p><a href={LicenseAgreement} target="_blank" rel="noopener noreferrer">Лицензионное соглашение</a></p>
                <p><a href={PrivacyPolicy} target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a></p>
            </div>
        </footer>
    );
};

export default Footer;
