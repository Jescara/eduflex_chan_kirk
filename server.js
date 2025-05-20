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
