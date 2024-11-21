import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAvantagesComponent } from './job-avantages.component';

describe('JobAvantagesComponent', () => {
  let component: JobAvantagesComponent;
  let fixture: ComponentFixture<JobAvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAvantagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
