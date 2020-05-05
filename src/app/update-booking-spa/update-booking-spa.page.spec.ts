import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateBookingSpaPage } from './update-booking-spa.page';

describe('UpdateBookingSpaPage', () => {
  let component: UpdateBookingSpaPage;
  let fixture: ComponentFixture<UpdateBookingSpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingSpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateBookingSpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
