import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisRestoComponent } from './emplois-resto.component';

describe('EmploisRestoComponent', () => {
  let component: EmploisRestoComponent;
  let fixture: ComponentFixture<EmploisRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploisRestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploisRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
