import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingservicePage } from './bookingservice.page';

describe('BookingservicePage', () => {
  let component: BookingservicePage;
  let fixture: ComponentFixture<BookingservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
