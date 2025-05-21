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

// Set the Oracle Instant Client library path
process.env.LD_LIBRARY_PATH = path.join(__dirname, 'instantclient', 'instantclient_23_8');

// Example Express server (adjust as needed)
const app = express();

app.use(json());
app.use(express.static('public'));
app.use('/api', userRoutes);
app.use('/api', contentRoutes);

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Server is running with Oracle Instant Client!');
// });

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
