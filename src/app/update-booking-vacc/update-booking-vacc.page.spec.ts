import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateBookingVaccPage } from './update-booking-vacc.page';

describe('UpdateBookingVaccPage', () => {
  let component: UpdateBookingVaccPage;
  let fixture: ComponentFixture<UpdateBookingVaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingVaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateBookingVaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
