import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponentComponent } from './vehicle-list-component.component';

describe('VehicleListComponentComponent', () => {
  let component: VehicleListComponentComponent;
  let fixture: ComponentFixture<VehicleListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
