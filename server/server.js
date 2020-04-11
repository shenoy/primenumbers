const path = require('path');
const express = require('express');
const app = express();
var cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const numRouter = require('./routes/numRoutes');
dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/numbers', numRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
