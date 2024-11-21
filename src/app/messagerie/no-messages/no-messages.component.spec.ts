import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMessagesComponent } from './no-messages.component';

describe('NoMessagesComponent', () => {
  let component: NoMessagesComponent;
  let fixture: ComponentFixture<NoMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
