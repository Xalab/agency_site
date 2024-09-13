import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JobsList from './JobsList';
import Breadcrumbs from '../../components/Breadcrumbs';
import './Jobs.css';

const Jobs = () => {
    return (
        <div className="jobs-page">
            <Header />
            <Breadcrumbs />
            <main>
                <JobsList />
            </main>
            <Footer />
        </div>
    );
};

export default Jobs;
