import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRestoVuParCandidatComponent } from './profil-resto-vu-par-candidat.component';

describe('ProfilRestoVuParCandidatComponent', () => {
  let component: ProfilRestoVuParCandidatComponent;
  let fixture: ComponentFixture<ProfilRestoVuParCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilRestoVuParCandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilRestoVuParCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
