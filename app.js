const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');  // Importa la configuración de la base de datos
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Coloca esto antes de las demás configuraciones de middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', (req, res) => {
    const { nombre, email, telefono, mensaje, quieroOfertas } = req.body;
    const sql = 'INSERT INTO formulario (nombre, email, telefono, mensaje, quiere_ofertas) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, email, telefono, mensaje, quieroOfertas], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al insertar datos en la base de datos');
        } else {
            console.log('Datos insertados correctamente');
            res.redirect('/');
        }
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

