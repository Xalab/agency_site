const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const { data } = req.body;
    const decryptedData = CryptoJS.AES.decrypt(data, 'secret-key').toString(CryptoJS.enc.Utf8);
    const parsedData = JSON.parse(decryptedData);
    console.log('Данные, отправленные на сервер:', parsedData);

    res.status(200).send({ message: 'Данные успешно приняты' });
});

app.listen(5000, () => {
    console.log('Сервер запущен на порту 5000');
});
