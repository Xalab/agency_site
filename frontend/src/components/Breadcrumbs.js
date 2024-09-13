import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ jobTitle }) => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path);

    const getBreadcrumbName = (path) => {
        switch (path) {
            case 'jobs':
                return 'Вакансии';
            case 'contacts':
                return 'Контакты';
            case 'about-us':
                return 'Про нас';
            default:
                return jobTitle || path; // Если есть jobTitle, используем его, иначе просто путь
        }
    };

    return (
        <p className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">Главная</Link>
            {paths.map((path, index) => (
                <span key={index} className="breadcrumb-item">
                    <span className="breadcrumb-separator"> — </span>
                    {index === paths.length - 1 ? (
                        <span className="breadcrumb-current">{getBreadcrumbName(path)}</span>
                    ) : (
                        <Link to={`/${paths.slice(0, index + 1).join('/')}`} className="breadcrumb-link">
                            {getBreadcrumbName(path)}
                        </Link>
                    )}
                </span>
            ))}
        </p>
    );
};

export default Breadcrumbs;
