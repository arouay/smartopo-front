import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphasesComponent } from './listphases.component';

describe('ListphasesComponent', () => {
  let component: ListphasesComponent;
  let fixture: ComponentFixture<ListphasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListphasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
