import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentmanageComponent } from './rentmanage.component';

describe('RentmanageComponent', () => {
  let component: RentmanageComponent;
  let fixture: ComponentFixture<RentmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentmanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
