const express = require('express');
const cors = require('cors');

const app = express();

// Built in middleware
app.use(express.json());
cors({
  origin: [
    'http://localhost:7891',
    //   'http:/127.0.0.1.5501',
  ],
  credentials: true,
});

// App routes
app.use('/sharks', require('./controllers/sharks'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
