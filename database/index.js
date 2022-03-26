const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: '',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

getCows = (callback) => {
  let qString = 'SELECT * from cows'
  connection.query(qString, (err, result) => {
    if (!err) {
      callback(null, result)
    }
  })
}



// Don't forget to export your functions!
module.exports = {
  getCows
};
