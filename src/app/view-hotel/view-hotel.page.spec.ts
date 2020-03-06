import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHotelPage } from './view-hotel.page';

describe('ViewHotelPage', () => {
  let component: ViewHotelPage;
  let fixture: ComponentFixture<ViewHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
