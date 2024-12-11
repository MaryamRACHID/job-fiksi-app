import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFavoriesComponent } from './mes-favories.component';

describe('MesFavoriesComponent', () => {
  let component: MesFavoriesComponent;
  let fixture: ComponentFixture<MesFavoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesFavoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesFavoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
