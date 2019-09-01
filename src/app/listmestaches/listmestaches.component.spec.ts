import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmestachesComponent } from './listmestaches.component';

describe('ListmestachesComponent', () => {
  let component: ListmestachesComponent;
  let fixture: ComponentFixture<ListmestachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmestachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmestachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
