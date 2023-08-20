import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentYComponent } from './component-y.component';

describe('ComponentYComponent', () => {
  let component: ComponentYComponent;
  let fixture: ComponentFixture<ComponentYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentYComponent]
    });
    fixture = TestBed.createComponent(ComponentYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
