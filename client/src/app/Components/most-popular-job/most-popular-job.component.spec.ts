import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularJobComponent } from './most-popular-job.component';

describe('MostPopularJobComponent', () => {
  let component: MostPopularJobComponent;
  let fixture: ComponentFixture<MostPopularJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPopularJobComponent]
    });
    fixture = TestBed.createComponent(MostPopularJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
