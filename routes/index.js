const express = require('express');

const router = express.Router();

// require('config');
// const newKeyPath = require('config').get('server:type');

// console.log(newKeyPath);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
  next();
});


module.exports = router;
