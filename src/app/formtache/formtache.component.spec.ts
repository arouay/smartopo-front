import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtacheComponent } from './formtache.component';

describe('FormtacheComponent', () => {
  let component: FormtacheComponent;
  let fixture: ComponentFixture<FormtacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
