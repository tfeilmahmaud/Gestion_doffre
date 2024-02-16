import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSRegisterComponent } from './js-register.component';

describe('JSRegisterComponent', () => {
  let component: JSRegisterComponent;
  let fixture: ComponentFixture<JSRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JSRegisterComponent]
    });
    fixture = TestBed.createComponent(JSRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
