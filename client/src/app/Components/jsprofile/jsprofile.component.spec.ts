import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSProfileComponent } from './jsprofile.component';

describe('JSProfileComponent', () => {
  let component: JSProfileComponent;
  let fixture: ComponentFixture<JSProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JSProfileComponent]
    });
    fixture = TestBed.createComponent(JSProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
