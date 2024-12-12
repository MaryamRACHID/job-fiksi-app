import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisPertinentsComponent } from './emplois-pertinents.component';

describe('EmploisPertinentsComponent', () => {
  let component: EmploisPertinentsComponent;
  let fixture: ComponentFixture<EmploisPertinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploisPertinentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploisPertinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
