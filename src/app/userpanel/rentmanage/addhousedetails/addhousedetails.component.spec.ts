import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhousedetailsComponent } from './addhousedetails.component';

describe('AddhousedetailsComponent', () => {
  let component: AddhousedetailsComponent;
  let fixture: ComponentFixture<AddhousedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhousedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhousedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
