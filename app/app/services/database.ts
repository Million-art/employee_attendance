// MySQL Connection
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_crud',
  });
  
  connection.connect((err:any) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      alert('Connected to MySQL database');

    } else {
      console.log('Connected to MySQL database');
      alert('Connected to MySQL database');
    }
  });

module.exports = connection;