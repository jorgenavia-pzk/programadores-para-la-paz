const express = require('express');
const app = express();

// Middleware para que el servidor entienda datos en formato JSON
app.use(express.json());

// Array en memoria para almacenar los reportes de la comunidad
let reportes = [];

// Ruta GET: Permite consultar la lista de reportes existentes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Permite registrar un nuevo reporte ciudadano y agregarlo a la lista
app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1, // Genera un ID automático según el tamaño actual de la lista
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Agrega el nuevo objeto reporte al array en memoria
  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});