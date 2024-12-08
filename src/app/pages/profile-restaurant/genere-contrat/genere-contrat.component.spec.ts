import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereContratComponent } from './genere-contrat.component';

describe('GenereContratComponent', () => {
  let component: GenereContratComponent;
  let fixture: ComponentFixture<GenereContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenereContratComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenereContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
