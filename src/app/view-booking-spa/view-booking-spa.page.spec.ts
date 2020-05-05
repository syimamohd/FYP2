import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBookingSpaPage } from './view-booking-spa.page';

describe('ViewBookingSpaPage', () => {
  let component: ViewBookingSpaPage;
  let fixture: ComponentFixture<ViewBookingSpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookingSpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBookingSpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
