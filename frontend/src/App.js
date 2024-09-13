import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Contacts from './pages/Contacts/Contacts';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import JobDetails from './pages/Jobs/JobDetails';
import ScrollToTop from './components/ScrollToTop'; // Импортируем новый компонент
import Gratitude from './components/Gratitude';
import './App.css';

function App() {
    return (
        <Router>
            <ScrollToTop /> {/* Подключаем компонент для прокрутки вверх */}
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/jobs/:title" element={<JobDetails />} />
                    <Route path="/gratitude" element={<Gratitude />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
