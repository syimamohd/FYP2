import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingspaPage } from './bookingspa.page';

describe('BookingspaPage', () => {
  let component: BookingspaPage;
  let fixture: ComponentFixture<BookingspaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingspaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingspaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
