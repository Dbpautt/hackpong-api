'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const data = {
    name: 'hackpong API',
    version: 'v1.0'
  };
  res.json(data);
});

module.exports = router;
