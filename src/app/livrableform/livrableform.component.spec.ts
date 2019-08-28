import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrableformComponent } from './livrableform.component';

describe('LivrableformComponent', () => {
  let component: LivrableformComponent;
  let fixture: ComponentFixture<LivrableformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrableformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrableformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
