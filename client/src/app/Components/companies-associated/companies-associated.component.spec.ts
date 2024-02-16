import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesAssociatedComponent } from './companies-associated.component';

describe('CompaniesAssociatedComponent', () => {
  let component: CompaniesAssociatedComponent;
  let fixture: ComponentFixture<CompaniesAssociatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesAssociatedComponent]
    });
    fixture = TestBed.createComponent(CompaniesAssociatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
