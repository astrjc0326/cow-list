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

create = (cow, callback) => {
  let qString = 'INSERT INTO cows (name, description) VALUES (?, ?)'
  connection.query(qString, cow, (err, result) => {
    if (!err) {
      console.log('put cow in the database successfully')
      callback(null, result)
    } else {
      console.log(err)
    }
  })
}

edit = (cow, callback) => {
  let qString = 'UPDATE cows SET name = ?, description = ? WHERE id = ?'
  connection.query(qString, cow, (err, result) => {
    if (!err) {
      console.log('edited a cow')
      callback(null, result)
    } else {
      callback(err)
    }
  })
}

deleteCow = (id, callback) => {
  let qString = 'DELETE FROM cows WHERE id = ?'
  connection.query(qString, id, (err, result) => {
    if (!err) {
      callback(null, result)
    } else {
      callback(err)
    }
  })
}


// Don't forget to export your functions!
module.exports = {
  getCows,
  create,
  edit,
  deleteCow
}
