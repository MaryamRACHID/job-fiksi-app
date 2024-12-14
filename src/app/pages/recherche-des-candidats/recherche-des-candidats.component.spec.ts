import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheDesCandidatsComponent } from './recherche-des-candidats.component';

describe('RechercheDesCandidatsComponent', () => {
  let component: RechercheDesCandidatsComponent;
  let fixture: ComponentFixture<RechercheDesCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheDesCandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheDesCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
