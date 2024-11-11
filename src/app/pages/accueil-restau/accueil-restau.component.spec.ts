import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilRestauComponent } from './accueil-restau.component';

describe('AccueilRestauComponent', () => {
  let component: AccueilRestauComponent;
  let fixture: ComponentFixture<AccueilRestauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilRestauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
