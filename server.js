const express = require('express');
const morgan = require('morgan');

const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(morgan('dev'));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackDevMiddleware(webpack(webpackConfig)));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
