import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBookingHotelPage } from './view-booking-hotel.page';

describe('ViewBookingHotelPage', () => {
  let component: ViewBookingHotelPage;
  let fixture: ComponentFixture<ViewBookingHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookingHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBookingHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
