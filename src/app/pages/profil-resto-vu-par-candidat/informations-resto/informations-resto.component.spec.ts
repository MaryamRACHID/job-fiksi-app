import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsRestoComponent } from './informations-resto.component';

describe('InformationsRestoComponent', () => {
  let component: InformationsRestoComponent;
  let fixture: ComponentFixture<InformationsRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationsRestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationsRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
