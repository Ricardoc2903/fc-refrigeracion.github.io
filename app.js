// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');  // Importa la configuración de la base de datos

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar los datos del formulario
app.post('/enviar-formulario', (req, res) => {
  const { nombre, email, telefono, mensaje, quieroOfertas } = req.body;

  // Validar y procesar los datos (aquí deberías hacer más validaciones según tus necesidades)

  // Insertar datos en la base de datos
  const sql = 'INSERT INTO formulario (nombre, email, telefono, mensaje, quiere_ofertas) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, email, telefono, mensaje, quieroOfertas], (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos: ', err);
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    } else {
      console.log('Datos insertados correctamente en la base de datos');
      res.status(200).json({ success: true, message: 'Datos enviados con éxito' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
