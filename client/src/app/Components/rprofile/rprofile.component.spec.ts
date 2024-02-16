import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RProfileComponent } from './rprofile.component';

describe('RProfileComponent', () => {
  let component: RProfileComponent;
  let fixture: ComponentFixture<RProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RProfileComponent]
    });
    fixture = TestBed.createComponent(RProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
