import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtenentComponent } from './addtenent.component';

describe('AddtenentComponent', () => {
  let component: AddtenentComponent;
  let fixture: ComponentFixture<AddtenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
