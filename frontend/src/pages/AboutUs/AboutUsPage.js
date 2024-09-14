import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import './AboutUsPage.css';
import imgAboutUs from '../../assets/img_about_us2.png';
import igor from "../../assets/member_igor.png";
import anna from "../../assets/member_anna.png";
import { Helmet } from 'react-helmet-async';

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <Helmet>
                <title>JobMap Europe - О нас</title>
            </Helmet>
            <Header />
            <Breadcrumbs />   
            <main>
                <section className="about-us">
                    <div className="about-us-hero">
                        <div className="hero-content">
                            <h2>Наша история</h2>
                            <p>
                                Основанная в 2010 году, наша компания начала свой путь как небольшое агентство, помогающее специалистам найти работу за рубежом. Сегодня мы — международная рекрутинговая компания с офисами в пяти странах и командой из более чем 50 профессионалов.
                            </p>
                            <p>
                                Наша миссия — соединять таланты с возможностями, предоставляя доступ к лучшим вакансиям по всему миру. Мы гордимся тем, что помогаем людям строить успешную карьеру за границей.
                            </p>
                        </div>
                        <div className="hero-image">
                            <img src={imgAboutUs} alt="Наша команда" />
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <h2>Руководство</h2>
                    <p className="team-intro">
                        Наш коллектив — это сплоченная команда экспертов с многолетним опытом в сфере международного рекрутинга.
                    </p>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={anna} alt="Анна Петришина" />
                            <h3>Анна Петришина</h3>
                            <p>Генеральный директор с опытом работы более 10 лет в сфере HR.</p>
                        </div>
                        <div className="team-member">
                            <img src={igor} alt="Игорь Шилов" />
                            <h3>Игорь Шилов</h3>
                            <p>Директор по развитию бизнеса, эксперт в международном трудоустройстве.</p>
                        </div>
                    </div>
                    </section>
                    <section className="team-section">
                    <div className="about-us-page-features">
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">01</div>
                            <div className="about-us-page-feature-content">
                                <h3>Персональный подход</h3>
                                <p>Индивидуально подходим к каждому кандидату, учитывая его цели и амбиции для подбора идеальной вакансии.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">02</div>
                            <div className="about-us-page-feature-content">
                                <h3>Обширная сеть партнеров</h3>
                                <p>Сотрудничаем с ведущими компаниями по всему миру, предоставляя доступ к эксклюзивным предложениям.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">03</div>
                            <div className="about-us-page-feature-content">
                                <h3>Быстрое трудоустройство</h3>
                                <p>Оптимизируем процессы, чтобы вы могли как можно скорее приступить к работе за границей.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">04</div>
                            <div className="about-us-page-feature-content">
                                <h3>Полное сопровождение</h3>
                                <p>Предоставляем поддержку на всех этапах — от подготовки документов до адаптации на новом месте.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">05</div>
                            <div className="about-us-page-feature-content">
                                <h3>Помощь с жильем</h3>
                                <p>Оказываем содействие в поиске комфортного жилья и решении бытовых вопросов.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">06</div>
                            <div className="about-us-page-feature-content">
                                <h3>Официальное оформление</h3>
                                <p>Гарантируем законность трудоустройства с соблюдением всех юридических норм и правил.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">07</div>
                            <div className="about-us-page-feature-content">
                                <h3>Визовая поддержка</h3>
                                <p>Консультируем и помогаем в получении необходимых виз и разрешений на работу.</p>
                            </div>
                        </div>
                        <div className="about-us-page-feature">
                            <div className="about-us-page-feature-number">08</div>
                            <div className="about-us-page-feature-content">
                                <h3>Непрерывная связь</h3>
                                <p>Остаемся на связи после трудоустройства, чтобы помочь в решении любых возникающих вопросов.</p>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
            </main>
        </div>
    );
};

export default AboutUsPage;
