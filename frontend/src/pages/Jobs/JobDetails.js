import React, { useState, useEffect } from 'react';
import './JobDetails.css';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import unidecode from 'unidecode';
import { Helmet } from 'react-helmet-async';

const transliterate = (text) => {
    return unidecode(text).replace(/\s+/g, '-').toLowerCase();
};

const JobDetails = () => {
    const { title } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Загружаем данные из JSON
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/job_details.json');
                const jobs = await response.json();
                const foundJob = jobs.find(job => transliterate(job.title) === title);
                setJob(foundJob);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setIsLoading(false);  // Завершаем загрузку
            }
        };

        fetchJobs();
    }, [title]);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner">
                    <div className="spinner-part part1"></div>
                    <div className="spinner-part part2"></div>
                    <div className="spinner-part part3"></div>
                </div>
            </div>
        );
    }

    if (!job) {
        return <div>Вакансия не найдена</div>;
    }

    return (
        <div className="job-details-page">
            <Helmet>
                <title>JobMap Europe - {job.title}</title>
            </Helmet>
            <Header />
            <Breadcrumbs jobTitle={job.title} />
            <main className="job-details">
                <div className="job-details-image" style={{ backgroundImage: `url(${job.image})` }}>
                </div>
                <div className="job-details-info">
                    <h1>{job.title}</h1>
                    <p><strong>Зарплата:</strong><br />{job.salary}</p>
                    <p><strong>График работы:</strong><br /> {job.schedule}</p>
                    <p><strong>Проживание и питание:</strong><br /> {job.accommodation}</p>
                    <p><strong>Обязанности:</strong></p>
                    <ul>
                        {job.duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                        ))}
                    </ul>
                    <p><strong>Требования и условия:</strong></p>
                    <ul>
                        {job.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                    <p><strong>Место работы:</strong> {job.city}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobDetails;
