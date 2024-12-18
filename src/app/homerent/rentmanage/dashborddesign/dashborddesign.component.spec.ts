import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborddesignComponent } from './dashborddesign.component';

describe('DashborddesignComponent', () => {
  let component: DashborddesignComponent;
  let fixture: ComponentFixture<DashborddesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashborddesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashborddesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
