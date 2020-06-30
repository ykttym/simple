const express = require('express')
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Document from './components/Document'
import App from './components/App'

const router = express.Router();

const appString = ReactDOMServer.renderToString(<App/>)
const html = ReactDOMServer.renderToStaticMarkup(<Document>
  {appString}
</Document>)

router.get("/", function (req, res, next) {
  res.status(200);
  res.send(html);
});

module.exports = router