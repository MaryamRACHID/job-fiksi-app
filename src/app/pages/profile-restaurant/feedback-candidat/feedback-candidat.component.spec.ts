import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCandidatComponent } from './feedback-candidat.component';

describe('FeedbackCandidatComponent', () => {
  let component: FeedbackCandidatComponent;
  let fixture: ComponentFixture<FeedbackCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackCandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
