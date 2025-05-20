process.env.LD_LIBRARY_PATH = __dirname + '/instantclient/instantclient_23_8';

const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: './instantclient/instantclient_23_8' });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.send('Oracle-backed Node.js app is up!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// // 1. Install dependencies: npm install express dotenv cors
// import express, { json }  from 'express';
import 'dotenv/config';
import userRoutes from './routes/user.js';
import contentRoutes from './routes/content.js';

// const app = express();

// middleware
app.use(json());
app.use(express.static('public'));
app.use('/api', userRoutes);
app.use('/api', contentRoutes);




// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`EduFlex Node server running on port ${PORT}`);
// });
