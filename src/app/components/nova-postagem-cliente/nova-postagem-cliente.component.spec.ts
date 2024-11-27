import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPostagemClienteComponent } from './nova-postagem-cliente.component';

describe('NovaPostagemClienteComponent', () => {
  let component: NovaPostagemClienteComponent;
  let fixture: ComponentFixture<NovaPostagemClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPostagemClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaPostagemClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
