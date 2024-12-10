import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRechercheComponent } from './header-recherche.component';

describe('HeaderRechercheComponent', () => {
  let component: HeaderRechercheComponent;
  let fixture: ComponentFixture<HeaderRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRechercheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
