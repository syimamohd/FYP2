import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateHotelPage } from './update-hotel.page';

describe('UpdateHotelPage', () => {
  let component: UpdateHotelPage;
  let fixture: ComponentFixture<UpdateHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
