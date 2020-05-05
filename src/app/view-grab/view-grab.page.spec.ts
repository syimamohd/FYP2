import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewGrabPage } from './view-grab.page';

describe('ViewGrabPage', () => {
  let component: ViewGrabPage;
  let fixture: ComponentFixture<ViewGrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
