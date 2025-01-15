import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymntreminderComponent } from './paymntreminder.component';

describe('PaymntreminderComponent', () => {
  let component: PaymntreminderComponent;
  let fixture: ComponentFixture<PaymntreminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymntreminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymntreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
