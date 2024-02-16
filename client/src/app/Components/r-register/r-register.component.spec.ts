import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRegisterComponent } from './r-register.component';

describe('RRegisterComponent', () => {
  let component: RRegisterComponent;
  let fixture: ComponentFixture<RRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RRegisterComponent]
    });
    fixture = TestBed.createComponent(RRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
