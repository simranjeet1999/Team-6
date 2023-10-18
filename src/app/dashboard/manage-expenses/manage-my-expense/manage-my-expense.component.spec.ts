import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyExpenseComponent } from './manage-my-expense.component';

describe('ManageMyExpenseComponent', () => {
  let component: ManageMyExpenseComponent;
  let fixture: ComponentFixture<ManageMyExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMyExpenseComponent]
    });
    fixture = TestBed.createComponent(ManageMyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
