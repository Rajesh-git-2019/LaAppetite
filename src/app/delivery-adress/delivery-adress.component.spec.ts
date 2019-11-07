import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAdressComponent } from './delivery-adress.component';

describe('DeliveryAdressComponent', () => {
  let component: DeliveryAdressComponent;
  let fixture: ComponentFixture<DeliveryAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
