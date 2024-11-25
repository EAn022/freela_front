import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostasClienteComponent } from './propostas-cliente.component';

describe('PropostasClienteComponent', () => {
  let component: PropostasClienteComponent;
  let fixture: ComponentFixture<PropostasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostasClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
