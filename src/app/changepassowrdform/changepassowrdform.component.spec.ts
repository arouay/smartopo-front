import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassowrdformComponent } from './changepassowrdform.component';

describe('ChangepassowrdformComponent', () => {
  let component: ChangepassowrdformComponent;
  let fixture: ComponentFixture<ChangepassowrdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepassowrdformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepassowrdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
