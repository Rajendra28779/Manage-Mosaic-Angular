import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantdetailsComponent } from './compliantdetails.component';

describe('CompliantdetailsComponent', () => {
  let component: CompliantdetailsComponent;
  let fixture: ComponentFixture<CompliantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliantdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompliantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
