export class EstadisticaDiaria {

    constructor (_id = '', dia = 0, apostado = 0, ganado = 0, profit = 0, mes = 0) {
        this._id = _id;
        this.dia = dia;
        this.apostado = apostado;
        this.ganado = ganado;
        this.profit = profit;
        var d = new Date();
        this.mes = d.getMonth();
    }

    _id: string;
    dia: number;
    apostado: number;
    ganado: number;
    profit: number;
    mes: number;
}