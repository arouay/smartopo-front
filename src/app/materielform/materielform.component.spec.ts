import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielformComponent } from './materielform.component';

describe('MaterielformComponent', () => {
  let component: MaterielformComponent;
  let fixture: ComponentFixture<MaterielformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
