import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensechargeformComponent } from './depensechargeform.component';

describe('DepensechargeformComponent', () => {
  let component: DepensechargeformComponent;
  let fixture: ComponentFixture<DepensechargeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensechargeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepensechargeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
