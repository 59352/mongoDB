const path = require('path');

module.exports = {
  db: {
    user: process.env.USER,
    database: process.env.USER,
    password: null,
    host: null,
    port: 8000,
  },
};

// const db = {
//   db: {
//     user: process.env.USER
//     , database: process.env.USER
//     , password: null
//     , host: null
//     , port: 5432,

//   },
// };
// module.exports = db;


