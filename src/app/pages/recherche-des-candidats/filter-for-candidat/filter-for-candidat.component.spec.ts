import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterForCandidatComponent } from './filter-for-candidat.component';

describe('FilterForCandidatComponent', () => {
  let component: FilterForCandidatComponent;
  let fixture: ComponentFixture<FilterForCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterForCandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterForCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
