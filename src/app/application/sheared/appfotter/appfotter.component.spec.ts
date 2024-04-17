import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfotterComponent } from './appfotter.component';

describe('AppfotterComponent', () => {
  let component: AppfotterComponent;
  let fixture: ComponentFixture<AppfotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppfotterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppfotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
