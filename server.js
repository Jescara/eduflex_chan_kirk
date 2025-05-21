// server.js
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import 'dotenv/config';
import userRoutes from './routes/user.js';
import contentRoutes from './routes/content.js';

// Simulate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Setup Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // ✅ Fix here
app.use(express.static(path.join(__dirname, 'public'))); // ✅ Serve static files

// API routes
app.use('/api', userRoutes);
app.use('/api', contentRoutes);

// Fallback route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // ✅ Load your registration page
});
app.get('/course', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'course.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
