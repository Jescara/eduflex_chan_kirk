// server.js
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';

// Simulate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the Oracle Instant Client library path
process.env.LD_LIBRARY_PATH = path.join(__dirname, 'instantclient', 'instantclient_23_8');

// Example Express server (adjust as needed)
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running with Oracle Instant Client!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
