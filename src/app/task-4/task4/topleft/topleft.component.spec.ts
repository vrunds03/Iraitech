import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopleftComponent } from './topleft.component';

describe('TopleftComponent', () => {
  let component: TopleftComponent;
  let fixture: ComponentFixture<TopleftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopleftComponent]
    });
    fixture = TestBed.createComponent(TopleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
