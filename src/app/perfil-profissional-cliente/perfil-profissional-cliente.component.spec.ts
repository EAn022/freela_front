import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfissionalClienteComponent } from './perfil-profissional-cliente.component';

describe('PerfilProfissionalClienteComponent', () => {
  let component: PerfilProfissionalClienteComponent;
  let fixture: ComponentFixture<PerfilProfissionalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilProfissionalClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilProfissionalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
