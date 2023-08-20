import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomrightComponent } from './bottomright.component';

describe('BottomrightComponent', () => {
  let component: BottomrightComponent;
  let fixture: ComponentFixture<BottomrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomrightComponent]
    });
    fixture = TestBed.createComponent(BottomrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
