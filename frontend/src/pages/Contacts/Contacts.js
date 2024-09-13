import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import './Contacts.css';
import contactsData from '../../contacts.json';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        location: '',
        job: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors[key] = true;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:6442/api/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        password: 'your-password',
                        data: formData
                    })
                });

                if (response.ok) {
                    setSuccessMessage(true);
                    setTimeout(() => {
                        setSuccessMessage(false);
                        window.location.href = '/gratitude';
                    }, 3000);
                    setFormData({
                        name: '',
                        age: '',
                        location: '',
                        job: '',
                        phone: ''
                    });
                } else {
                    throw new Error('Ошибка при отправке данных');
                }
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    };

    return (
        <div className="contacts-page">
            <Header />
            <Breadcrumbs />
            <main className="contacts-container">
                {successMessage && (
                    <div className="success-message">Заявка успешно отправлена</div>
                )}
                <div className="contact-image-container">
                    <div className="contact-overlay">
                        <h2>Свяжитесь с нами</h2>
                        {contactsData.contacts.email && (
                            <p><strong>{contactsData.contacts.email.label}:</strong> {contactsData.contacts.email.value}</p>
                        )}
                        {contactsData.contacts.phone && (
                            <p><strong>{contactsData.contacts.phone.label}:</strong> {contactsData.contacts.phone.value}</p>
                        )}
                        {contactsData.contacts.telegram && (
                            <p><strong>{contactsData.contacts.telegram.label}:</strong> {contactsData.contacts.telegram.value}</p>
                        )}
                        {contactsData.contacts.whatsapp && (
                            <p><strong>{contactsData.contacts.whatsapp.label}:</strong> {contactsData.contacts.whatsapp.value}</p>
                        )}
                    </div>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={`form-group ${errors.name ? 'error' : ''}`}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`form-group ${errors.age ? 'error' : ''}`}>
                            <input
                                type="text"
                                id="age"
                                name="age"
                                placeholder="Возраст"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`form-group ${errors.location ? 'error' : ''}`}>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Место"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Номер телефона"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`form-group ${errors.job ? 'error' : ''}`}>
                            <input
                                type="text"
                                id="job"
                                name="job"
                                placeholder="Вакансия"
                                value={formData.job}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Отправить заявку</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contacts;
