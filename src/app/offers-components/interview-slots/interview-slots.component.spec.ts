import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSlotsComponent } from './interview-slots.component';

describe('InterviewSlotsComponent', () => {
  let component: InterviewSlotsComponent;
  let fixture: ComponentFixture<InterviewSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewSlotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
