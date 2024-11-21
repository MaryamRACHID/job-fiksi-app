import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceedPageComponent } from './succeed-page.component';

describe('SucceedPageComponent', () => {
  let component: SucceedPageComponent;
  let fixture: ComponentFixture<SucceedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucceedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucceedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
