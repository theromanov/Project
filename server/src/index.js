const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const authorRoutes = require('./routes/authorRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);


app.use('/api/authors', authMiddleware, authorRoutes);
app.use('/api/publications', authMiddleware, publicationRoutes);
app.use('/api/subscriptions', authMiddleware, subscriptionRoutes);
app.use('/api/payments', authMiddleware, paymentRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});