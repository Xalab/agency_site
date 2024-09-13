import React from 'react';
import './ContractSigning.css';
import arrowImage from '../../assets/arrow.png'; // Десктопная стрелка

const ContractSigning = () => {
    return (
        <section className="contract-signing">
            <h2>Оформление договора</h2>
            <div className="steps-container">
                <div className="step">
                    <div className="number">01</div>
                    <p>Вы присылаете фото документов и полную информацию для составления договора</p>
                </div>
                <div className="arrow">
                    <img src={arrowImage} alt="Десктопная стрелка" />
                </div>
                <div className="mobile-arrow">↓</div>
                <div className="step">
                    <div className="number">02</div>
                    <p>Мы переводим всё на иностранный язык, оформляем весь пакет документов</p>
                </div>
                <div className="mobile-arrow">↓</div>
                <div className="step">
                    <div className="number">03</div>
                    <p>После подтверждения присылаем вам маршрутный лист с адресами и деталями доезда</p>
                </div>
                <div className="arrow">
                    <img src={arrowImage} alt="Десктопная стрелка" />
                </div>
                <div className="mobile-arrow">↓</div>
                <div className="step">
                    <div className="number">04</div>
                    <p>Вы приезжаете на работу. Там вас встретит координатор от работодателя и будет консультировать вас для дальнейших действий</p>
                </div>
            </div>
        </section>
    );
};

export default ContractSigning;
