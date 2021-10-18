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
// Define Routes
app.use('/', indexroutes);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('api running');
  });
}
app.use('/api/url', urlroutes);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
