import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripmanageComponent } from './tripmanage.component';

describe('TripmanageComponent', () => {
  let component: TripmanageComponent;
  let fixture: ComponentFixture<TripmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripmanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
