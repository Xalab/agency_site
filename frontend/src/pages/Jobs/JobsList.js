import React, { useState, useEffect } from 'react';
import './JobsList.css';
import { Link } from 'react-router-dom';
import unidecode from 'unidecode';

// Функция для транслитерации названия вакансии в URL-friendly формат
const transliterate = (text) => {
    return unidecode(text).replace(/\s+/g, '-').toLowerCase();
};

const JobsList = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);  // Добавляем состояние для отслеживания загрузки

    // Загружаем вакансии из JSON
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/all_job_list.json'); // Путь до JSON-файла
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Ошибка при загрузке вакансий:', error);
            } finally {
                setIsLoading(false);  // Завершаем загрузку
            }
        };

        fetchJobs();
    }, []);

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
        </section>
    );
};

export default JobsList;
