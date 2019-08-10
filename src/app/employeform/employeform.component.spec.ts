import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeformComponent } from './employeform.component';

describe('EmployeformComponent', () => {
  let component: EmployeformComponent;
  let fixture: ComponentFixture<EmployeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
