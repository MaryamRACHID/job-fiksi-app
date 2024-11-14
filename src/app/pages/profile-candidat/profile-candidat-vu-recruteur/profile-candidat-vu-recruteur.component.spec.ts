import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCandidatVuRecruteurComponent } from './profile-candidat-vu-recruteur.component';

describe('ProfileCandidatVuRecruteurComponent', () => {
  let component: ProfileCandidatVuRecruteurComponent;
  let fixture: ComponentFixture<ProfileCandidatVuRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCandidatVuRecruteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCandidatVuRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
