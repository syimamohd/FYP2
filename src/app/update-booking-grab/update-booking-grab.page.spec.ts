import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateBookingGrabPage } from './update-booking-grab.page';

describe('UpdateBookingGrabPage', () => {
  let component: UpdateBookingGrabPage;
  let fixture: ComponentFixture<UpdateBookingGrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingGrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateBookingGrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
