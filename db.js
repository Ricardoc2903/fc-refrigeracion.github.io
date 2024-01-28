// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bbbvcmxneed8s6t1teel-mysql.services.clever-cloud.com',
  user: 'uk4k2pcx1gody9f7',
  password: 'IyIQbxs6BsJT1tyBwDCi',
  database: 'bbbvcmxneed8s6t1teel',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos: ', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = db;
