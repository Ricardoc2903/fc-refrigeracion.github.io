const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'https://fc-refrigeracion-github-aye4oa03b-ricardoc2903s-projects.vercel.app', // Replace with your client's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.post('/enviar-formulario', (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  const sql = 'INSERT INTO formulario (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, email, telefono, mensaje], (err, result) => {
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
