import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCoverageComponent } from './location-coverage.component';

describe('LocationCoverageComponent', () => {
  let component: LocationCoverageComponent;
  let fixture: ComponentFixture<LocationCoverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationCoverageComponent]
    });
    fixture = TestBed.createComponent(LocationCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
