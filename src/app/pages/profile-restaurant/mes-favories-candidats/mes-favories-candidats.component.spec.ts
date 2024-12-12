import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFavoriesCandidatsComponent } from './mes-favories-candidats.component';

describe('MesFavoriesCandidatsComponent', () => {
  let component: MesFavoriesCandidatsComponent;
  let fixture: ComponentFixture<MesFavoriesCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesFavoriesCandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesFavoriesCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
