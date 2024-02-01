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
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Asegúrate de que se envíe el archivo correcto
});

app.post('https://fc-refrigeracion-github-c4q7qid3u-ricardoc2903s-projects.vercel.app/contacto.html/enviar-formulario', async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje, quieroOfertas } = req.body;

    // Insertar datos en la base de datos
    const sql = 'INSERT INTO formulario (nombre, email, telefono, mensaje, quiere_ofertas) VALUES (?, ?, ?, ?, ?)';
    await db.query(sql, [nombre, email, telefono, mensaje, quieroOfertas]);

    console.log('Datos insertados correctamente en la base de datos');
    res.status(200).json({ success: true, message: 'Datos enviados con éxito' });
  } catch (error) {
    console.error('Error al insertar datos en la base de datos: ', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
