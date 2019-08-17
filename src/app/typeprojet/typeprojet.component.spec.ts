import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeprojetComponent } from './typeprojet.component';

describe('TypeprojetComponent', () => {
  let component: TypeprojetComponent;
  let fixture: ComponentFixture<TypeprojetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeprojetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
