import React from 'react';
import './AboutUs.css';
import imgAboutUs from '../../assets/img_about_us.jpg';

const AboutUs = () => {
    return (
        <section className="about-us">
            <h2>Про нас</h2>
            <div className="about-us-background"></div>
            <div className="about-us-container">
                <div className="about-us-image">
                    <img src={imgAboutUs} alt="Про нас" />
                </div>
                <div className="about-us-content">
                    <p>
                        Мы — профессиональная рекрутинговая компания, специализирующаяся на подборе вакансий
                        в международных направлениях. Мы предлагаем широкий спектр услуг по трудоустройству
                        в таких странах, как Норвегия, Швеция, Польша, Канада и Германия.
                    </p>
                    <p>
                        Наше агентство стремится сделать процесс поиска работы за границей максимально комфортным
                        и успешным для вас. Мы гордимся нашей репутацией надежного партнера в сфере рекрутинга и готовы
                        поддержать вас на каждом этапе вашего карьерного пути.
                    </p>
                </div>
            </div>
            <div className="about-us-features">
                <div className="feature">
                    <div className="feature-number">01</div>
                    <div className="feature-content">
                        <h3>Индивидуальный подход</h3>
                        <p>Мы внимательно изучаем ваши требования и предпочтения, чтобы предложить наиболее подходящие вакансии.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">02</div>
                    <div className="feature-content">
                        <h3>Широкая сеть работодателей</h3>
                        <p>Мы сотрудничаем с проверенными компаниями в различных отраслях, что позволяет нам предлагать вам лучшие возможности на рынке труда.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">03</div>
                    <div className="feature-content">
                        <h3>Быстрое трудоустройство</h3>
                        <p>Мы обеспечиваем оперативное рассмотрение и обработку вашей заявки, что позволяет вам быстро найти работу.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">04</div>
                    <div className="feature-content">
                        <h3>Полное сопровождение</h3>
                        <p>Мы помогаем вам на каждом этапе — от составления резюме до подписания трудового контракта и получения рабочей визы, если это необходимо.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">05</div>
                    <div className="feature-content">
                        <h3>Поддержка в вопросах проживания</h3>
                        <p>Мы предлагаем помощь в поиске жилья и организации переезда, чтобы ваше пребывание в новой стране было комфортным.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">06</div>
                    <div className="feature-content">
                        <h3>Официальное трудоустройство</h3>
                        <p>Мы гарантируем официальное трудоустройство с оформлением всех необходимых документов и соблюдением трудового законодательства.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">07</div>
                    <div className="feature-content">
                        <h3>Консультации по визовым вопросам</h3>
                        <p>Мы предоставляем актуальную информацию и помощь в получении необходимых виз и разрешений на работу.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-number">08</div>
                    <div className="feature-content">
                        <h3>Поддержка на всех этапах</h3>
                        <p>Мы сопровождаем вас на всех этапах работы за границей, чтобы вы чувствовали себя уверенно.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
