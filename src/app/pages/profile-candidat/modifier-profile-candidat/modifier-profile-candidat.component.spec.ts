import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfileCandidatComponent } from './modifier-profile-candidat.component';

describe('ModifierProfileCandidatComponent', () => {
  let component: ModifierProfileCandidatComponent;
  let fixture: ComponentFixture<ModifierProfileCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierProfileCandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProfileCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
