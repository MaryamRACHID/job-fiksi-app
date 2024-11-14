import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContactCandidatComponent } from './button-contact-candidat.component';

describe('ButtonContactCandidatComponent', () => {
  let component: ButtonContactCandidatComponent;
  let fixture: ComponentFixture<ButtonContactCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonContactCandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonContactCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
