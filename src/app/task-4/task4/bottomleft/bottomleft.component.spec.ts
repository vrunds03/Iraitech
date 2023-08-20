import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomleftComponent } from './bottomleft.component';

describe('BottomleftComponent', () => {
  let component: BottomleftComponent;
  let fixture: ComponentFixture<BottomleftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomleftComponent]
    });
    fixture = TestBed.createComponent(BottomleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
