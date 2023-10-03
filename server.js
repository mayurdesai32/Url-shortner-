const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const path = require('path');
const app = express();
require('./db/conn');
const PORT = process.env.PORT;
app.use(express.json());
const urlroutes = require('./routes/url');
const indexroutes = require('./routes/index');
var cors = require('cors');
// Define Routes
app.use('/', indexroutes);

app.get('/', (req, res) => {
  res.send('api running');
});

app.use(
  cors({
    origin: 'https://urlshortner-bbo7.onrender.com',
    optionsSuccessStatus: 200,
  })
);
app.use('/api/url', urlroutes);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
