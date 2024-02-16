import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsByDayComponent } from './jobs-by-day.component';

describe('JobsByDayComponent', () => {
  let component: JobsByDayComponent;
  let fixture: ComponentFixture<JobsByDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsByDayComponent]
    });
    fixture = TestBed.createComponent(JobsByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
