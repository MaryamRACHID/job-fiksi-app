import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfosRestaurantComponent } from './modifier-infos-restaurant.component';

describe('ModifierInfosRestaurantComponent', () => {
  let component: ModifierInfosRestaurantComponent;
  let fixture: ComponentFixture<ModifierInfosRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierInfosRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInfosRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
