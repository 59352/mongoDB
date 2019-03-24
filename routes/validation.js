const createError = require('http-errors');
const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.render('validation');
});
// const emailType = new RegExp("\b\w+@\w+\.\w+\b");
// // const linkType = new RegExp("^([a-z0-9]{5,})$");
// // const nickType =new RegExp("^([a-z0-9]{5,})$");
// const inputData = (inputData) => {
//   if (inputData == emailType ) {
//     console.log('You have entered Email!')
//   } else if( inputData == linkType ) {
//     console.log('You have entered a link!')
//   } else if( inputData == nickType) {
//     console.log('You have entered a nickname!')
//   } else {
//     console.log('This is not expected data type!')
//   }
// }
// let valid = /\w+/g,
// textForValidation = 'javascript@gmail.com, learn.javascript.ru, Vortex';
// console.log(textForValidation.match(valid));

// const input = document.getElementsByClassName('input')
// const output = document.getElementsByClassName('output');

// input.addEventListener('keyup'), () => {
//     output.innerHTML = this.value;
// }, false;

module.exports = router;
