import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseClaimComponent } from './expenseclaim.component';

describe('ExpenseClaimComponent', () => {
  let component: ExpenseClaimComponent;
  let fixture: ComponentFixture<ExpenseClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
