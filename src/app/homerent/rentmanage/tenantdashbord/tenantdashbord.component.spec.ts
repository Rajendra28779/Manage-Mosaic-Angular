import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantdashbordComponent } from './tenantdashbord.component';

describe('TenantdashbordComponent', () => {
  let component: TenantdashbordComponent;
  let fixture: ComponentFixture<TenantdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
