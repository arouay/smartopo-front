import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseformComponent } from './phaseform.component';

describe('PhaseformComponent', () => {
  let component: PhaseformComponent;
  let fixture: ComponentFixture<PhaseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
