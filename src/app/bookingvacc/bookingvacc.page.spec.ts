import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingvaccPage } from './bookingvacc.page';

describe('BookingvaccPage', () => {
  let component: BookingvaccPage;
  let fixture: ComponentFixture<BookingvaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingvaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingvaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
