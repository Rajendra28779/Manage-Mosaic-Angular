import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerentComponent } from './homerent.component';

describe('HomerentComponent', () => {
  let component: HomerentComponent;
  let fixture: ComponentFixture<HomerentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomerentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
