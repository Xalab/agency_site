import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Gratitude.css';
import imgGratitude from '../assets/img_gratitude.png';

const Gratitude = () => {
    return (
        <div className="gratitude-page">
            <Header />
            <main className="gratitude-content">
                <div className="gratitude-image" style={{ backgroundImage: `url(${imgGratitude})` }}>
                    <div className="gratitude-overlay">
                        <h1>Благодарим вас за отправку заявки</h1>
                        <p>Мы уже начали обработку вашей заявки</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Gratitude;
