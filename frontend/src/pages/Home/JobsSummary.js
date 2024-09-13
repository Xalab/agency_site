import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './JobsSummary.css';
import unidecode from 'unidecode';

const transliterate = (text) => {
    return unidecode(text).replace(/\s+/g, '-').toLowerCase();
};

const JobsSummary = () => {
    const [jobs, setJobs] = useState([]);

    // Загружаем вакансии из JSON
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/main_page_jobs.json'); // Путь до JSON-файла
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Ошибка при загрузке вакансий:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className="jobs-summary">
            <h2>Вакансии</h2>
            <div className="jobs-grid">
                {jobs.map((job, index) => (
                    <div key={index} className="job-card-wrapper">
                        <div className="job-image" style={{ backgroundImage: `url(${job.image})` }}>
                            <span className="job-country"><i className="fas fa-map-marker-alt"></i> {job.country}</span>
                        </div>
                        <div className="job-card">
                            <div className="job-content">
                                <div className="job-header">
                                    <h3>{job.title}</h3>
                                </div>
                                <p><strong>График работы:</strong> {job.schedule}</p>
                                <p><strong>Зарплата:</strong> {job.salary}</p>
                                <p><strong>Проживание:</strong> {job.accommodation}</p>
                                <p><strong>Город:</strong> {job.city}</p>
                                <Link to={`/jobs/${transliterate(job.title)}`} className="details-button">
                                    Детальнее
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="more-jobs-wrapper">
                <Link to="/jobs" className="details-button more-jobs-button more-button">
                    Больше вакансий
                </Link>
            </div>
        </section>
    );
};

export default JobsSummary;
