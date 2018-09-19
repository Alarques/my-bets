import { Component, OnInit } from '@angular/core';
import { EstadisticaDiariaService } from '../../services/estadistica-diaria.service';
import { NgForm } from '@angular/forms';
import { EstadisticaDiaria } from '../../models/estadistica-diaria';

declare var M: any;

@Component({
  selector: 'app-estadisticas-diarias',
  templateUrl: './estadisticas-diarias.component.html',
  styleUrls: ['./estadisticas-diarias.component.css'],
  providers: [EstadisticaDiariaService]
})
export class EstadisticasDiariasComponent implements OnInit {

  constructor(private estDiariaService: EstadisticaDiariaService) { }

  ngOnInit() {
    var d = new Date();
    var mes = d.getMonth();
    this.getEstadisticasDiariasPorMes(mes);
  }

  addEstadisticaDiaria(form: NgForm) {
    if(form.value._id){
      this.estDiariaService.putEstadisticaDiaria(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Updated Successfuly'});
          this.getEstadisticasDiariasPorMes(form.value.mes);
        });
    }else {
      this.estDiariaService.postEstadisticaDIaria(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Saved Successfuly'});
          this.getEstadisticasDiariasPorMes(form.value.mes);
        });
    }
  }

  editEstadisticaDiaria(estDiaria: EstadisticaDiaria) {
    this.estDiariaService.selectedEstadistica = estDiaria;
  }

  deleteEstadisticaDiaria(_id: string) {
    if(confirm("Are you sure you want to delete it?")){
      this.estDiariaService.deleteEstadisticaDiaria(_id)
      .subscribe(res => {
        M.toast({html: 'Deleted Successfuly'});
        var mes = this.estDiariaService.selectedEstadistica.mes;
        this.getEstadisticasDiariasPorMes(mes);
      });
    }
  }

  getEstadisticasDiarias() {
    this.estDiariaService.getEstadisticasDiarias()
      .subscribe(res => {
        this.estDiariaService.estDiarias = res as EstadisticaDiaria[];
        console.log(res);
      });
  }

  getEstadisticasDiariasPorMes(mes : number){
    console.log(mes);
    this.estDiariaService.getEstadisticasDiariasPorMes(mes)
      .subscribe(res => {
        this.estDiariaService.estDiarias = res as EstadisticaDiaria[];
        console.log(res);
      })
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.estDiariaService.selectedEstadistica = new EstadisticaDiaria();
    }
  }

}
