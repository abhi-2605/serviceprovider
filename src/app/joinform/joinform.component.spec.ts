import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinformComponent } from './joinform.component';

describe('JoinformComponent', () => {
  let component: JoinformComponent;
  let fixture: ComponentFixture<JoinformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
