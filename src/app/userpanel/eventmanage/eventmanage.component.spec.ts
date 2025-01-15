import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanageComponent } from './eventmanage.component';

describe('EventmanageComponent', () => {
  let component: EventmanageComponent;
  let fixture: ComponentFixture<EventmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventmanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
