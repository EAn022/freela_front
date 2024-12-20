import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProposalComponent } from './my-proposal.component';

describe('MyProposalComponent', () => {
  let component: MyProposalComponent;
  let fixture: ComponentFixture<MyProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProposalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
