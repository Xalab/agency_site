import React from 'react';
import './CollaborationSteps.css';
import imgCollav1 from '../../assets/choices1.png';
import imgCollav2 from '../../assets/sign1.png';
import imgCollav3 from '../../assets/consulting1.png';
import imgCollav4 from '../../assets/document1.png';
import imgCollav5 from '../../assets/journey1.png';
import imgCollav6 from '../../assets/help1.png';

const CollaborationSteps = () => {
    return (
        <section className="collaboration-steps">
            <h2>Этапы сотрудничества</h2>
            <div className="coll_steps-grid">
                <div className="coll_step">
                    <div className="icon">
                        <img src={imgCollav1} alt="Выбор вакансии" />
                    </div>
                    <p>Выбор вакансии</p>
                    <div className="line"></div>
                </div>
                <div className="coll_step">
                    <div className="icon">
                        <img src={imgCollav2} alt="Оформление заявки" />
                    </div>
                    <p>Оформление заявки</p>
                    <div className="line"></div>
                </div>
                <div className="coll_step">
                    <div className="icon">
                        <img src={imgCollav3} alt="Полная консультация и помощь в подборе вакансии" />
                    </div>
                    <p>Полная консультация и помощь в подборе вакансии</p>
                    <div className="line"></div>
                </div>
                <div className="coll_step">
                    <div className="icon">
                        <img src={imgCollav4} alt="Подготовка документов на трудоустройство" />
                    </div>
                    <p>Подготовка документов на трудоустройство</p>
                    <div className="line"></div>
                </div>
                <div className="coll_step">
                    <div className="icon">
                        <img src={imgCollav5} alt="Переезд к работодателю на трудоустройство и расселение" />
                    </div>
                    <p>Переезд к работодателю на трудоустройство и расселение</p>
                    <div className="line"></div>
                </div>
                <div className="coll_step">
                    <div className="icon">
                        <img src={imgCollav6} alt="Консультация и поддержка 24/7" />
                    </div>
                    <p>Консультация и поддержка 24/7</p>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
};

export default CollaborationSteps;
