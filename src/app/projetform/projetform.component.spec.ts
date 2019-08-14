import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetformComponent } from './projetform.component';

describe('ProjetformComponent', () => {
  let component: ProjetformComponent;
  let fixture: ComponentFixture<ProjetformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
