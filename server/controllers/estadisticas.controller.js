
const EstadisticaDiaria = require('../models/estd-diaria');

const estadisticaCtrl = {};

estadisticaCtrl.getEstadisticasDiarias = async (req, res) => {
    const estDiarias = await EstadisticaDiaria.find();
    res.json(estDiarias);
};

estadisticaCtrl.getEstadisticasDiariasPorMes = async (req, res) => {
    const { mes } = req.params;
    var query = { 'mes': mes };
    const estDiarias = await EstadisticaDiaria.find(query);
    res.json(estDiarias);
}

estadisticaCtrl.createEstadisticaDiaria = async (req, res) => {
    const estDiaria = new EstadisticaDiaria({
        dia: req.body.dia,
        apostado: req.body.apostado,
        ganado: req.body.ganado,
        profit: req.body.ganado - req.body.apostado,
        mes: req.body.mes
    });
    await estDiaria.save();
    res.json({
        'status': 'Estadistica guardada'
    });
};

estadisticaCtrl.getEstadisticaDiaria = async (req, res) => {
    const estDiaria = await EstadisticaDiaria.findById(req.params.id);
    res.json(estDiaria);
};

estadisticaCtrl.editEstadisticaDiaria = async (req, res) => {
    const { id } = req.params;
    const estDiaria = {
        dia: req.body.dia,
        apostado: req.body.apostado,
        ganado: req.body.ganado,
        profit: req.body.ganado - req.body.apostado,
        mes: req.body.mes
    };
    console.log(req.body);
    await EstadisticaDiaria.findByIdAndUpdate(id, {$set: estDiaria}, {new: true});
    res.json({
        status: 'Estadistica actualizada'
    });
};

estadisticaCtrl.deleteEstadisticaDiaria = async (req, res) =>  {
    await EstadisticaDiaria.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Estadistica eliminada'
    });
};

module.exports = estadisticaCtrl;