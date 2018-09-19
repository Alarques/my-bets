const express = require('express');
const router = express.Router();

const estadistica = require('../controllers/estadisticas.controller');

//Rutas para acceder al controlador
router.get('/', estadistica.getEstadisticasDiarias);
router.post('/', estadistica.createEstadisticaDiaria);
router.get('/:id', estadistica.getEstadisticaDiaria);
router.put('/:id', estadistica.editEstadisticaDiaria);
router.delete('/:id', estadistica.deleteEstadisticaDiaria);
router.get('/porMes/:mes', estadistica.getEstadisticasDiariasPorMes);


module.exports = router;