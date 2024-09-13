const express = require('express');
const path = require('path');

// Создаем экземпляр Express
const app = express();

// Указываем порт, на котором будет запущен сервер
const PORT = process.env.PORT || 3000;

// Указываем папку для статических файлов (папка build, созданная после сборки React-приложения)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Маршрутизация для всех запросов на корневой маршрут
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
