// server/src/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const path = require('path');

// Імпорт роутерів та middleware
const authRoutes = require('./routes/authRoutes');
const authorRoutes = require('./routes/authorRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// --- Global middleware ---
app.use(cors());
app.use(express.json());

// --- Public (no auth) ---
app.use('/api/auth', authRoutes);

// --- Protected routes (JWT required) ---
app.use('/api/authors', authMiddleware, authorRoutes);
app.use('/api/publications', authMiddleware, publicationRoutes);
app.use('/api/subscriptions', authMiddleware, subscriptionRoutes);
app.use('/api/payments', authMiddleware, paymentRoutes);

// Порт з .env або 8080 за замовчуванням
const PORT = process.env.PORT || 8080;

// Зчитуємо ключ і сертифікат
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../cert/cert.pem')),
};

// Запускаємо HTTPS-сервер
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS Server listening on port ${PORT}`);
});
