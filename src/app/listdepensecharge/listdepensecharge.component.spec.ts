import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepensechargeComponent } from './listdepensecharge.component';

describe('ListdepensechargeComponent', () => {
  let component: ListdepensechargeComponent;
  let fixture: ComponentFixture<ListdepensechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdepensechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdepensechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
