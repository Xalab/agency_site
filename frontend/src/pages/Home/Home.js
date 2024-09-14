import React from 'react';
import Header from '../../components/Header';
import MainApplicationForm from './MainApplicationForm';
import CollaborationSteps from './CollaborationSteps';
import ContractSigning from './ContractSigning';
import JobsSummary from './JobsSummary';
import AboutUs from './AboutUs';
import AdditionalApplicationForm from './AdditionalApplicationForm';
import Footer from '../../components/Footer';
import './Home.css';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>JobMap Europe</title>
            </Helmet>
            <Header />
            <main>
                <MainApplicationForm />
                <CollaborationSteps />
                <ContractSigning />
                <JobsSummary />
                <AboutUs />
                <AdditionalApplicationForm />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
