import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteformComponent } from './recetteform.component';

describe('RecetteformComponent', () => {
  let component: RecetteformComponent;
  let fixture: ComponentFixture<RecetteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
