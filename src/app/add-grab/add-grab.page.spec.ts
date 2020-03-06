import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGrabPage } from './add-grab.page';

describe('AddGrabPage', () => {
  let component: AddGrabPage;
  let fixture: ComponentFixture<AddGrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
