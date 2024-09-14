import React, { useState } from 'react';
import './MainApplicationForm.css';
import img1 from '../../assets/SE.png';
import img2 from '../../assets/woman-farmer.png';
import img3 from '../../assets/NO.png';
import img4 from '../../assets/DE.png';
import img5 from '../../assets/man-shef.png';
import img6 from '../../assets/woman-office-worker.png';
import img7 from '../../assets/man-factory-worker.png';

const MainApplicationForm = () => {
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
                const response = await fetch('https://job-map.agency/api/data', {
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
        <section className="main-application-form">
            {successMessage && (
                <div className="success-message">Заявка успешно отправлена</div>
            )}
            <div className="text-block">
                <h1>Найдите работу<br /> своей мечты</h1>
                <p>Ваш идеальный карьерный путь начинается здесь!</p>
            </div>
            <div className="circles-container">
                <div className="circle circle1">
                    <img src={img1} alt="image1" />
                </div>
                <div className="circle circle2">
                    <img src={img2} alt="image2" />
                </div>
                <div className="circle circle3">
                    <img src={img3} alt="image3" />
                </div>
                <div className="circle circle4">
                    <img src={img4} alt="image3" />
                </div>
                <div className="circle circle5">
                    <img src={img5} alt="image3" />
                </div>
                <div className="circle circle6">
                    <img src={img6} alt="image3" />
                </div>
                <div className="circle circle7">
                    <img src={img7} alt="image3" />
                </div>
            </div>
            <div className="form-block">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ borderColor: errors.name ? 'red' : '#ccc' }}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Возраст"
                        value={formData.age}
                        onChange={handleChange}
                        style={{ borderColor: errors.age ? 'red' : '#ccc' }}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Место"
                        value={formData.location}
                        onChange={handleChange}
                        style={{ borderColor: errors.location ? 'red' : '#ccc' }}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Номер телефона"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ borderColor: errors.job ? 'red' : '#ccc' }}
                    />
                    <input
                        type="text"
                        name="job"
                        placeholder="Вакансия"
                        value={formData.job}
                        onChange={handleChange}
                        style={{ borderColor: errors.job ? 'red' : '#ccc' }}
                    />
                    <button type="submit">Отправить заявку</button>
                </form>
            </div>
        </section>
    );
};

export default MainApplicationForm;