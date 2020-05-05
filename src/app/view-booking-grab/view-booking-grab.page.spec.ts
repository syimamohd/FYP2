import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBookingGrabPage } from './view-booking-grab.page';

describe('ViewBookingGrabPage', () => {
  let component: ViewBookingGrabPage;
  let fixture: ComponentFixture<ViewBookingGrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookingGrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBookingGrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
