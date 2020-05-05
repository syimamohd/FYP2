import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookinghotelPage } from './bookinghotel.page';

describe('BookinghotelPage', () => {
  let component: BookinghotelPage;
  let fixture: ComponentFixture<BookinghotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinghotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookinghotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
