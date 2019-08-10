import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeemployesComponent } from './listeemployes.component';

describe('ListeemployesComponent', () => {
  let component: ListeemployesComponent;
  let fixture: ComponentFixture<ListeemployesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeemployesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeemployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
