import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatDescriptionComponent } from './candidat-description.component';

describe('CandidatDescriptionComponent', () => {
  let component: CandidatDescriptionComponent;
  let fixture: ComponentFixture<CandidatDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
