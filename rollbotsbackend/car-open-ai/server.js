import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chatRoutes from './src/routes/chat.js';
import jobsearchRoutes from './src/routes/jobsearch.js';
// ...existing code...
// ...existing code...

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/jobs', jobsearchRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: {
      message: 'Internal server error',
      code: 'SERVER_ERROR'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- POST /api/chat/start - Create new chat thread`);
  console.log(`- POST /api/chat/message - Send message to thread`);
  console.log(`- GET /api/chat/history/:threadId - Get thread history`);
});
