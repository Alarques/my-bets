import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasDiariasComponent } from './estadisticas-diarias.component';

describe('EstadisticasDiariasComponent', () => {
  let component: EstadisticasDiariasComponent;
  let fixture: ComponentFixture<EstadisticasDiariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasDiariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
