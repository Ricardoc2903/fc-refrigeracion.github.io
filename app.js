// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const db = require('./db');  // Importa la configuración de la base de datos
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors()); // Coloca esto antes de las demás configuraciones de middleware

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/enviar-formulario', async (req, res) => {
//   try {
//     const { nombre, email, telefono, mensaje, quieroOfertas } = req.body;

//     // Insertar datos en la base de datos
//     const sql = 'INSERT INTO formulario (nombre, email, telefono, mensaje, quiere_ofertas) VALUES (?, ?, ?, ?, ?)';
//     await db.query(sql, [nombre, email, telefono, mensaje, quieroOfertas]);

//     console.log('Datos insertados correctamente en la base de datos');
//     res.status(200).json({ success: true, message: 'Datos enviados con éxito' });
//   } catch (error) {
//     console.error('Error al insertar datos en la base de datos: ', error);
//     res.status(500).json({ success: false, message: 'Error en el servidor' });
//   }
// });


// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });


// app.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');  // Importa la configuración de la base de datos
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Configura el middleware para procesar formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para procesar el formulario
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
    console.log(`Servidor escuchando en el puerto ${port}`);
});

