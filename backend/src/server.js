const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

// Load environment variables
require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(compression());

// Configure CORS
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    return callback(new Error('CORS Policy: Origin not allowed.'), false);
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Mount Routes ───────────────────────────────────────────────
const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

// Health Check / Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Influnex Media API — Service Operational',
    env: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'An unexpected server error occurred.'
      : err.message
  });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});

// Graceful Shutdown
const shutdown = () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server shut down.');
    process.exit(0);
  });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
