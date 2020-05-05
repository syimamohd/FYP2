import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateGrabPage } from './update-grab.page';

describe('UpdateGrabPage', () => {
  let component: UpdateGrabPage;
  let fixture: ComponentFixture<UpdateGrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateGrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
