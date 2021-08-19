import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenseClaimComponent } from './view-expenseclaim.component';

describe('ViewExpenseComponent', () => {
  let component: ViewExpenseClaimComponent;
  let fixture: ComponentFixture<ViewExpenseClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpenseClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpenseClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
